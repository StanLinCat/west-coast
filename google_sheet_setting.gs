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
  lock.tryLock(10000); // 避免同時多人寫入時打架，鎖定 10 秒

  try {
    const doc = SpreadsheetApp.openById(scriptProp.getProperty('key'));
    const sheet = doc.getSheetByName(sheetName);

    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    const nextRow = sheet.getLastRow() + 1;

    // 將資料對應到標題
    const newRow = headers.map(function(header) {
      if (header === 'timestamp') {
        return new Date();
      } else {
        // 從傳來的資料中抓取對應標題的值
        return e.parameter[header]; 
      }
    });

    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);

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