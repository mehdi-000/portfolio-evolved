# 🚀 Portfolio Evolved

> **Interactive 3D portfolio** that blends 3D graphics with functional web design.

**[🌐 Live Demo](https://www.mehdipopal.dev)** | Built with Next.js 15, TypeScript, and React Three Fiber.

![Lighthouse Performance Report](docs/lighthouse_perfomance.png)

---

## ✨ Highlights

**🎮 Playable Games**  
Two Unity games fully embedded and playable in the browser

**🎯 FPS Skills Shooter**  
Shoot 3D butterflies flying through space to reveal my tech stack

**🚗 Interactive 3D Models**  
Cyberpunk cart with camera controls for 360° viewing

**✨ Particle System**  
Custom GLSL shaders morph thousands of particles into logo

**🎨 Micro-interactions**  
Hover effects with particle explosions on nav elements

---

## 🏔️ The Journey

This started as an experiment: How much interactivity and creative 3D elements can you pack into a portfolio without destroying the performance & user experience?

**Version 1: The Prototype**

The [first version](https://github.com/mehdi-000/portfolio-protype) was heavy on visuals and experimental elements but light on structure and had some drawbacks.

**Version 2: Prototype Evolved**

I took everything I learned and rebuilt from scratch using [react-three-next](https://github.com/pmndrs/react-three-next) starter, improving features, adding proper code splitting, accessibility considerations, and a single-canvas architecture.

**What I Learned:**  
The single-canvas approach might be overkill for this use case, but I wanted to learn the pattern for managing multiple 3D scenes efficiently.

> What you're seeing now reflects what I learned about balancing creativity with maintainability UX and performance.

---

## 🛠️ Tech Stack

| Category      | Technologies                        |
| ------------- | ----------------------------------- |
| Framework     | Next.js 15 (App Router), TypeScript |
| Styling       | Tailwind CSS                        |
| 3D            | React Three Fiber, Drei, Three.js   |
| Animation     | GSAP, Custom GLSL Shaders           |
| Smooth Scroll | Lenis                               |
| Deployment    | Vercel                              |

---

## 🎯 Technical Highlights

### 🎨 Interactive Features

- FPS-style skills game with camera on curved path
- Embedded Unity games via itch.io
- 3D model viewer with preset camera angles
- Custom GLSL shader particle systems
- Mobile-optimized 3D experiences

### ⚡ Performance

- Single canvas for multiple 3D viewports (`gl.scissor`)
- Dynamic imports for on-demand loading
- GLTF model preloading
- Persistent canvas across routes
- Heavily optimized 3D assets
- Proper balance between server and client side rendering

---

## 📁 Project Structure

```
src/
├── app/           # Routes (cart, games, projects)
├── components/
│   ├── canvas/    # 3D: SkillsGame, LogoAnimated, Models
│   ├── dom/       # React UI components
│   └── ui/        # Shadcn components
├── templates/     # GLSL shaders
└── public/        # 3D models & assets
```

---

## 🚀 Quick Start

**Development:**

```bash

# Clone the repository
git clone https://github.com/mehdi-000/portfolio-evolved.git
cd portfolio-evolved

# Install dependencies
yarn install

# Start development server
yarn dev
```

**Production:**

```bash
# Build production server
yarn build

# Start server
yarn start
```

---

## 📊 Performance

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
💼 [LinkedIn](https://www.linkedin.com/in/mehdi-popal-65a2a525a)  
📧 mehdipopal@outlook.de

---

## 📄 License

MIT © 2025 Mehdi Popal
