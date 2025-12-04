Get-ChildItem "LINE_ALBUM_2020聖誕文化節_251204_*.jpg" | Where-Object {
    # 取出檔名最後的數字
    $num = ($_ -replace '.*_', '' -replace '\.jpg','')
    # 判斷是否為偶數
    [int]$num % 2 -eq 0
} | Remove-Item