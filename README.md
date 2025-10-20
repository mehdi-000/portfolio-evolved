# 🚀 Portfolio Evolved

> A high-performance, interactive 3D developer portfolio showcasing modern web technologies and creative engineering.

**[🌐 Live Demo](https://www.mehdipopal.dev)** | Built with Next.js 15, TypeScript, and React Three Fiber

![Performance Score](docs/lighthouse_perfomance.png)

---

## ✨ Highlights

- **🎯 Single-Canvas Architecture**: Multiple 3D scenes rendered efficiently using `gl.scissor` viewport management
- **⚡ Zero Loading Screens**: Intelligent lazy loading and dynamic imports for instant page loads
- **🎨 Interactive 3D**: Full-featured 3D experiences with preserved state across navigation
- **📱 Fully Responsive**: Seamless experience from mobile to desktop
- **🚄 Production-Grade Performance**: Optimized bundle splitting and on-demand rendering

Built from the ground up using [react-three-next](https://github.com/pmndrs/react-three-next) as a foundation, then extensively customized for performance and UX.

---

## 🛠️ Tech Stack

| Category        | Technologies                                  |
| --------------- | --------------------------------------------- |
| **Framework**   | Next.js 15 (App Router), TypeScript           |
| **Styling**     | Tailwind CSS                                  |
| **3D Engine**   | React Three Fiber, Drei, Three.js             |
| **Performance** | Dynamic imports, Code splitting, Lazy loading |
| **Deployment**  | Vercel (Edge Network)                         |

---

## 🎯 Key Technical Features

### Performance Optimizations

- Strategic code splitting to minimize initial bundle size
- GLTF model preloading with `useGLTF.preload()`
- Persistent canvas across routes (avoids expensive WebGL context recreation)
- Per-module imports to keep client bundles lean

### Architecture Decisions

- **Single Canvas, Multiple Viewports**: Uses scissor testing to render different 3D scenes efficiently
- **State Preservation**: Scene state maintained during navigation for smooth UX
- **Progressive Enhancement**: Core content loads first, 3D enhancements follow

---

## 📁 Project Structure

```
src/
├── app/                   # Next.js App Router pages
├── components/
│   ├── canvas/            # 3D scene components
│   ├── dom/               # Traditional React components
│   └── ui/                # Reusable UI elements
├── helpers/               # Utilities and global helpers
├── templates/             # Reusable patterns (shaders, hooks)
└── public/                # Static assets and 3D models
```

---

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/mehdi-000/portfolio-evolved.git
cd portfolio-evolved

# Install dependencies
yarn install

# Start development server
yarn dev
```

**Production build:**

```bash
yarn build
yarn start
```

**Analyze bundle:**

```bash
yarn build
# Bundle analyzer runs automatically post-build
```

---

## 📊 Performance Metrics

- ✅ **First Contentful Paint**: < 1.5s
- ✅ **Time to Interactive**: < 3.0s
- ✅ **Lighthouse Score**: 90+ across all categories
- ✅ **Zero layout shifts** (CLS: 0)

_See `docs/` for detailed performance reports_

---

## 🔮 Roadmap

Check the [Issues](https://github.com/mehdi-000/portfolio-evolved/issues) tab for upcoming features and improvements.

---

## 📫 Contact

**Mehdi Popal**  
🌐 [mehdipopal.dev](https://www.mehdipopal.dev)  
💼 [LinkedIn](https://www.linkedin.com/in/mehdi-popal)  
📧 mehdipopal@outlook.de

---

## 📄 License

MIT © 2025 Mehdi Popal
