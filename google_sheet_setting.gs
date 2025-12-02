// 注意：這裡的引號內請改成你 Google Sheet 下方分頁的名稱 (通常預設是 "工作表1")
const sheetName = '工作表1'; 
const scriptProp = PropertiesService.getScriptProperties();

// 第一次執行是用來綁定試算表 ID
function setup() {
  const doc = SpreadsheetApp.getActiveSpreadsheet();
  scriptProp.setProperty('key', doc.getId());
}

// 這就是接收 Hugo 傳來資料的主程式
function doPost(e) {
  const lock = LockService.getScriptLock();
  // 避免同時多人寫入時打架，鎖定 10 秒
  lock.tryLock(10000); 

  try {
    const doc = SpreadsheetApp.openById(scriptProp.getProperty('key'));
    const sheet = doc.getSheetByName(sheetName);

    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    const nextRow = sheet.getLastRow() + 1;

    // --- 1. 準備寫入的資料和時間戳 ---
    const currentTime = new Date(); // 計算一次時間戳
    
    // 提取 Email 所需的核心資料
    const clientName = e.parameter.name || '訪客';
    const clientEmail = e.parameter.email;
    const clientMessage = e.parameter.message;

    // 將資料對應到標題
    const newRow = headers.map(function(header) {
      if (header === 'timestamp') {
        return currentTime; // 使用剛剛計算的時間戳
      } else {
        // 從傳來的資料中抓取對應標題的值
        return e.parameter[header]; 
      }
    });

    // 寫入資料到 Google Sheet
    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);

    // ==========================================================
    // 2. 🎯 新增功能：寄送回覆 Email 🎯
    // ==========================================================
    
    // 檢查是否有 Email 地址，確保寄送成功
    if (clientEmail) { 
        // ***** 請將郵件主旨和網站名稱替換成您的資訊 *****
        const subject = "感謝您的留言！[請替換為您的網站名稱]"; 
        
        const body = 
          "親愛的 " + clientName + " 您好，\n\n" +
          "我們已成功收到您的訊息備份，內容如下：\n\n" +
          "----------------------------------------\n" +
          "提交時間: " + currentTime.toLocaleString() + "\n" +
          "您的稱呼: " + clientName + "\n" +
          "電子郵件: " + clientEmail + "\n" +
          "留言內容: \n" + clientMessage + "\n" +
          "----------------------------------------\n\n" +
          "我們會盡快處理您的訊息。謝謝！\n" +
          "[請替換為您的網站名稱] 敬上";

        // 嘗試寄送郵件
        try {
          MailApp.sendEmail({
            to: clientEmail,
            subject: subject,
            body: body
          });
        } catch(mailError) {
          // 郵件寄送失敗，但不影響表單資料寫入成功
          Logger.log("郵件寄送失敗，請檢查權限或配額: " + mailError.toString());
        }
    }
    // ==========================================================


    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  catch (e) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  finally {
    lock.releaseLock();
  }
}