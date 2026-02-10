# 矩联科技官网

矩联科技官方网站项目（默认静态站点骨架，后续可平滑升级到 Vite / Nuxt / Next 等）。

## 在线访问
https://tuaran.github.io/julian-tech-website/

## 目录结构
- public/ 静态资源（直接拷贝到根目录）
- src/    页面与样式资源
- index.html 入口页面

## 本地预览（任选其一）
### 方式 A：VSCode Live Server
安装 Live Server 插件后右键 index.html -> Open with Live Server

### 方式 B：Python 简易静态服务器
python3 -m http.server 5173
然后打开 http://localhost:5173

## 快速上线：GitHub Pages
1. 推送到 `main` 分支（仓库根目录包含 `index.html`）。
2. GitHub 仓库 → Settings → Pages。
3. Source 选择 `Deploy from a branch`。
4. Branch 选择 `main`，目录选择 `/ (root)`，保存。
5. 等待 1-3 分钟，访问 Pages 给出的 URL。

### 注意：域名占位
- [robots.txt](robots.txt) 和 [sitemap.xml](sitemap.xml) 里有 `REPLACE_WITH_YOUR_DOMAIN` 占位，绑定自定义域名或确认 Pages URL 后把它替换掉。
