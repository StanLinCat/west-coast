# 西海岸發展協會官網

社團法人台灣西海岸發展協會的官方網站。Hugo + Hugo Blox（Tailwind），部署在 Cloudflare Pages。

## 每次開始工作，先做這件事：檢查「最新活動」是否過期

規則：**「最新消息&活動」（`content/newest/`）只保留最近六個月內的貼文**，以貼文 front matter 的 `date` 為準。超過六個月的，移到「過去活動」（`content/event/`）。

1. 列出過期的貼文：

   ```bash
   python3 -c "
   import datetime, glob, re
   cutoff = datetime.date.today() - datetime.timedelta(days=183)
   for f in sorted(glob.glob('content/newest/*/index.md')):
       m = re.search(r'^date:\s*(\d{4}-\d{2}-\d{2})', open(f, encoding='utf-8').read(), re.M)
       if m and datetime.date.fromisoformat(m.group(1)) < cutoff:
           print('過期：', m.group(1), f)
   "
   ```

2. 每一篇過期的貼文：
   - 用 `git mv content/newest/<slug> content/event/<slug>` 整個資料夾搬過去（圖片、相簿一起）。
   - 在 front matter 的 `date:` 下面加 `aliases`，讓舊網址繼續有效（社群上分享過的連結才不會壞掉）：

     ```yaml
     aliases:
       - /newest/<slug>/   # YYYY-MM-DD 從「最新活動」移到「過去活動」，保留舊網址
     ```

     這個網站設了 `disableAliases: true`，所以不會產生 HTML 轉址頁，而是寫進建置輸出的 `_redirects`，由 Cloudflare Pages 轉址。建置後可以 `cat public/_redirects` 確認有這一行。

3. 跟使用者回報搬了哪幾篇，commit 訊息寫清楚（例如「最新活動過期整理：2025 聖誕文化節相簿移到過去活動」）。
4. 沒有過期的就不用動，也不用特別回報。

注意：如果 `content/newest/` 被清空，首頁「最新消息&活動」區塊會變成空的，搬之前先提醒使用者。

## 內容放在哪裡

| 網站上的位置 | 檔案 |
| :--- | :--- |
| 首頁各區塊 | `content/_index.md` |
| 最新消息&活動（首頁 `#newest`、活動頁上方） | `content/newest/<slug>/index.md` + `featured.jpg` |
| 過去活動（活動頁下方） | `content/event/<slug>/index.md` |
| 相關媒體：YouTube 影片（`id: youtube`）、新聞報導（`id: news`） | `content/news/_index.md`，**新的放最上面**，依日期由新到舊 |
| 社群連結（首頁「追蹤我們的社群」＋聯絡我們頁） | `data/social_links.yaml`，兩個頁面共用 |
| 官方 LINE QR Code | `assets/media/line-qr.svg`（連到 `https://line.me/R/ti/p/@397kcgep`） |
| 作者 | `content/authors/<id>/_index.md`，`title` 是顯示名稱 |

常用作者 ID：`billbright` 林碧亮、`LKH` 柳克翰、`admin` 林昱廷、`Ji-Zhihuang` 紀志煌、`CBK` 陳博凱。其他的到 `content/authors/` 查 `title`。

## 寫新貼文

- 一篇一個資料夾：`content/newest/<年份>-<英文短名>/`，例如 `2026-budai-sea-story/`。
- front matter 參考現有貼文：`title`、`summary`（首頁卡片顯示的摘要，一兩句）、`date`、`authors`、`tags`。
- 封面圖命名為 `featured.jpg`。海報 PNG 先轉成 JPG（品質約 88），檔案控制在 1 MB 內；海報上有 QR Code 的話，轉檔後確認還掃得到。
- 直式海報在首頁卡片只會裁出中段，重要的字要在中間才看得到。
- 內文精簡：一兩句開場、時間地點、流程、方案或費用、報名方式。表格在手機上容易擠，欄位多的內容改用條列。
- 報名一律導向官方 LINE。

## 建置、預覽與部署

- 本機建置：Hugo **0.152.1 extended**，先 `pnpm install`，再 `hugo --minify`。推之前先建置一次，確認沒有 ERROR／WARN。
- 推到 `master` = 正式上線（Cloudflare Pages 專案 `wcgospel`，https://wcgospel.pages.dev）。
- 推到其他分支會自動產生預覽網址：`https://<分支名稱，斜線換成連字號>.wcgospel.pages.dev`，例如 `draft/budai-sea-story` → `https://draft-budai-sea-story.wcgospel.pages.dev`。
- 新貼文或明顯的版面改動：先推到 `draft/<名稱>` 分支，把預覽網址給使用者看，確認後再合併到 `master`。使用者說「直接 push」或只是加一筆連結這類小改動，可以直接推 `master`。
- 推完到 GitHub commit 的 check「Cloudflare Pages: wcgospel」確認建置成功，再回報。

### 站內搜尋索引（Pagefind）

- Cloudflare 目前的建置指令只跑 Hugo，不會重建搜尋索引，所以網站用的是 repo 裡的 `static/pagefind/`。
- **新增或修改貼文後要重建索引**，不然新內容搜不到：

  ```bash
  rm -rf /tmp/wc-public static/pagefind
  hugo --minify --destination /tmp/wc-public
  ./node_modules/.bin/pagefind --site /tmp/wc-public --output-path static/pagefind
  ```

  再把 `static/pagefind/` 一起 commit。
- 根本解法：到 Cloudflare Pages 專案 `wcgospel` → Settings → Build 把建置指令改成 `pnpm run build`（`package.json` 的 build 已經包含 `pagefind --site public`）。改好以後就可以刪掉 `static/pagefind/` 和上面這段。

## 客製化的版型

- `_vendor/` 是 Hugo Blox 主題原始碼，**不要直接改**。要客製某個 block，把它複製到 `layouts/_partials/hbx/blocks/<block 名稱>/block.html` 再改（`contact-info` 就是這樣做的）。
- 自己寫的元件放在 `layouts/_partials/west-coast/`（社群連結清單、LINE QR Code 小卡），`social-links` block 在 `layouts/_partials/hbx/blocks/social-links/`。

## 絕對不要

- **這個 repo 是公開的**。不要把帳號、密碼、備用碼、私人對話紀錄、個資放進 repo。`somethingelse/` 以前有過這類檔案，已從 git 歷史清除，`.gitignore` 也擋住了。
- 不要 force push `master`，除非使用者明確要求。
