# 现代工程化（可选）

当前仓库默认就是“纯静态站点”，可以直接用 GitHub Pages 从分支发布。

如果你想要：
- 本地更舒适的开发体验（热更新、构建产物 dist）
- 后续更容易接入 Tailwind / 组件化 / CI/CD

可以启用 Vite + Tailwind（本仓库已预置配置）。

## 1) 本地开发

```bash
npm i
npm run dev
```

然后打开终端输出的本地地址。

## 2) 构建与预览

```bash
npm run build
npm run preview
```

产物在 `dist/`。

## 3) GitHub Actions 自动部署到 GitHub Pages（推荐现代流程）

说明：这是“另一种” Pages 发布方式（Actions 构建 → 发布）。

步骤：
1. 先在 GitHub 仓库 Settings → Pages，把 Source 改成 **GitHub Actions**。
2. 仓库已包含工作流文件：`.github/workflows/deploy-pages.yml`。
3. 推送到 `main` 后会自动构建并发布。

## 4) Cloudflare Pages 自动部署

1. Cloudflare Dashboard → Pages → Create a project → 选择你的 GitHub 仓库。
2. Build settings：
   - Framework preset：Vite
   - Build command：`npm run build`
   - Build output directory：`dist`
3. 部署后会给你一个 `*.pages.dev` 域名；如果绑定自定义域名，请同步更新 `robots.txt` / `sitemap.xml` / `index.html` 里的站点地址（canonical/og:url）。
