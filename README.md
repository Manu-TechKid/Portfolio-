# Emmanuel Kiprotich — Developer Portfolio

A modern, high-performance developer portfolio built with **React 19**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Lucide Icons**.

---

## 🚀 Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler & Dev Server**: Vite
- **Styling**: Tailwind CSS with custom terminal/emerald theme
- **Icons**: Lucide React
- **Hosting Support**: Vercel, Netlify, Cloudflare Pages, GitHub Pages

---

## 🛠️ Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run local dev server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for production**:
   ```bash
   npm run build
   ```
   The optimized production output will be in the `dist/` directory.

---

## ✏️ How to Edit Content

All portfolio content, projects, skills, education, and links are organized inside a single typed data file:
📂 **`src/data/portfolio.ts`**

- **Personal Info & Bio**: Edit `PERSONAL_INFO`
- **Projects**: Add, remove, or modify items in `PROJECTS`
- **Skills**: Update skills & categories in `SKILL_CATEGORIES`
- **Work Experience & Education**: Edit items in `EXPERIENCE_ITEMS`
- **CV / Resume**: Replace `public/Emmanuel_Kiprotich_CV.pdf` with your updated resume PDF.

---

## 🌐 How to Host & Deploy (100% Free)

### Option 1: Deploy on Vercel (Recommended)
1. Push this project repository to your GitHub account: `https://github.com/Manu-TechKid/portfolio`
2. Go to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Vercel will automatically detect **Vite** and deploy your site in seconds!

### Option 2: Deploy on Netlify
1. Log in to [Netlify](https://www.netlify.com/).
2. Click **"Add new site"** > **"Import an existing project"** from GitHub.
3. Build command: `npm run build` | Publish directory: `dist`.
4. Click **Deploy**.

---

## 📄 License
MIT © Emmanuel Kiprotich
