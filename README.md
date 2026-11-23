# Game of Forces

Physics, simplified through sport. The site is made of **series**:

- **LAPTHESIS**: Formula 1 technical upgrades before every Grand Prix.
- **The Winning Formula**: the multi-sport newsletter (where sports meet science). Its posts use `badge: "Issue 1"` and `sport: "Cricket"` instead of a round number.

It's plain HTML, CSS and JavaScript with no build step, so Vercel serves it as is.

## Files

| File | What it is |
|---|---|
| `posts.js` | **Your series and all your posts.** This is the only file you edit to publish. |
| `index.html` | Game of Forces home: the series and the latest posts from all of them |
| `lapthesis/index.html` | The LAPTHESIS series page: latest post, search, team and season filters |
| `winning-formula/index.html` | The Winning Formula newsletter page: latest article, search, sport filter |
| `post.html` | Single post page (used by every series) |
| `about.html` | About page |
| `assets/style.css` | All styling (brand colours are at the top) |
| `assets/app.js` | Renders the pages from `posts.js` |
| `images/` | Post images, one folder per post |

## Writing a new post

1. Open `posts.js`.
2. Copy one `{ ... }` post block and paste it at the top of the `window.POSTS = [` list.
3. Set `section: "lapthesis"` (or another series), and change the `slug` (it must be unique), the details, the `upgrades` rows and the `body`.
4. Put the post's images in a new folder such as `images/2026-qatar/` and reference them in the body like `![caption](images/2026-qatar/map.png)`.
5. Save, commit and push. Vercel redeploys in a few seconds.

## Starting a new series (another sport)

1. In `posts.js`, add an entry to `window.SECTIONS` with a key (say `football`), a name, sport, tagline and accent colour.
2. Copy the `lapthesis` folder, name the copy `football`, and in its `index.html` change `data-section="lapthesis"` to `data-section="football"` and rewrite the hero text.
3. Add a nav link to it in the `<nav>` of each page.
4. Give its posts `section: "football"`.

## Previewing locally

Double-click `index.html` to open it in your browser. No server is needed.

## Deploying to Vercel

1. Create a GitHub repo and push this folder to it.
2. Go to vercel.com, choose **Add New → Project**, and import the repo.
3. Set Framework Preset to **Other**, leave Build Command empty, and keep Output Directory as the root.
4. Click **Deploy**. Every `git push` after that redeploys the site.

LAPTHESIS will be at `your-site.vercel.app/lapthesis`.
