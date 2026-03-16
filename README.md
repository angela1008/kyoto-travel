# Kyoto Travel

這是一個使用 React + Vite 建構的專案。

## 快速開始

### 1. 安裝套件
請在終端機執行以下指令：
```bash
npm install
```

### 2. 環境變數設定
請參考 `.env.example` 建立 `.env.local` 檔案。

### 3. 啟動開發伺服器
```bash
npm run dev
```

## 部署上線
本專案已設定 GitHub Actions，將程式碼推送到 `main` 分支即會自動部署至 GitHub Pages。
> **注意：** 目前已在 `vite.config.ts` 內預設設定 `base: '/kyoto-travel/'`，以對應 GitHub Pages 路徑。

## 檔案設定說明
- `package.json`: 專案資訊與對應套件。
- `.github/workflows/deploy.yml`: 自動部署 GitHub Pages 的腳本。
- `.gitignore`: 確保不會將隱私設定檔及暫存檔上傳。
