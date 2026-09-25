# Academic website / 学术主页

A bilingual, mobile-friendly personal site for GitHub Pages. It uses only HTML, CSS, and JavaScript; no build step is needed.

## Edit your information / 修改个人信息

1. Open `script.js`. Replace the bracketed placeholders in both `en` and `zh` with your English and Chinese content. The first visit displays English; the language button remembers a visitor's selection.
2. To make contact addresses and profile names clickable, replace the relevant text spans in `index.html` with links and keep their text in sync with `script.js`, or ask Codex to do this after you provide the URLs.
3. If you want a downloadable CV, add your PDF to this folder and ask Codex to add a CV link. The current page says the CV is available upon request.

## Publish with GitHub Pages / 发布

1. Create a public GitHub repository named `<your-username>.github.io`.
2. Upload or push `index.html`, `styles.css`, `script.js`, and `.nojekyll` to its `main` branch.
3. In the repository, open **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**, then **main** and **/(root)**, and save.
4. Visit `https://<your-username>.github.io`. GitHub says publishing may take up to 10 minutes.

The bracketed text is intentionally placeholder copy. Review and replace it before sharing the site.
