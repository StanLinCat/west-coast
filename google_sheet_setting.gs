// 注意：這裡的引號內請改成你 Google Sheet 下方分頁的名稱 (通常預設是 "工作表1")
const sheetName = '工作表1'; 
const scriptProp = PropertiesService.getScriptProperties();

// 設定協會接收內部通知的 Email 地址 (建議使用 Google Groups 地址)
const ASSOCIATION_EMAIL = 'twcgospel@gmail.com'; // **請確認使用這個群組信箱或您希望接收通知的信箱**
const SITE_NAME = '西海岸發展協會官方網站'; // **請替換成您的網站名稱**


// 第一次執行是用來綁定試算表 ID
function setup() {
  const doc = SpreadsheetApp.getActiveSpreadsheet();
  scriptProp.setProperty('key', doc.getId());
  //Browser.msgBox('試算表 ID 已成功設定！');
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
    // 請注意：e.parameter.name 必須與表單的 name 屬性一致
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
    // 2. 🎯 雙重備份：寄送回覆 Email 給客戶 + 通知協會 🎯
    // ==========================================================
    
    if (clientEmail) { 
        // --- 2.1 寄送自動回覆給客戶 (包含所有提交的資訊作為備份) ---
        const clientSubject = "感謝您的留言！[" + SITE_NAME + "]"; 
        
        // 使用動態方式組裝客戶郵件內容 (與原程式碼相同，包含所有資料)
        const clientBody = 
          "親愛的 " + clientName + " 您好，\n\n" +
          "我們已成功收到您的訊息備份，內容如下：\n\n" +
          "----------------------------------------\n" +
          "提交時間: " + currentTime.toLocaleString() + "\n" +
          // 這裡使用您 Sheet 標頭定義的所有欄位，動態生成內容
          headers.slice(1).map(header => {
              const value = e.parameter[header] || '(未提供)';
              return header + ": " + value;
          }).join('\n') +
          "\n----------------------------------------\n\n" +
          "我們會盡快處理您的訊息。謝謝！\n" +
          SITE_NAME + " 敬上";

        try {
          MailApp.sendEmail({
            to: clientEmail,
            subject: clientSubject,
            body: clientBody
          });
        } catch(mailError) {
          Logger.log("客戶郵件寄送失敗: " + mailError.toString());
        }

        // --- 2.2 寄送通知給協會內部 (完整備份通知) ---
        const internalSubject = "【網站表單完整備份】來自 " + clientName;
        
        let detailedData = "----------------------------------------\n";
        
        // 1. 先處理時間戳
        detailedData += "提交時間: " + currentTime.toLocaleString() + "\n";

        // 2. 處理所有其他欄位，確保按照 Sheet Header 順序顯示
        headers.forEach(function(header) {
          if (header !== 'timestamp') { // 排除已處理的時間戳
            const value = e.parameter[header] || '(未提供)';
            // 對長篇留言內容進行簡單格式化
            const displayValue = (header === 'message' && value.length > 50) ? '\n' + value : value;
            detailedData += header + ": " + displayValue + "\n";
          }
        });
        detailedData += "----------------------------------------\n";

        const internalBody = 
          "網站收到新的聯絡表單提交，這是完整的備份資料：\n\n" +
          detailedData +
          "\n請前往 Google Sheet 檢視完整資料。\n" +
          SITE_NAME + " 團隊敬上"; // 方便成員直接回覆

        try {
          MailApp.sendEmail({
            to: ASSOCIATION_EMAIL,
            subject: internalSubject,
            body: internalBody
          });
        } catch(mailError) {
          Logger.log("協會內部通知郵件寄送失敗: " + mailError.toString());
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