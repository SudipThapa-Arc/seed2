# 📋 Project Requirements (Discovery Summary)

## 1. Scope & Nature
Treat the main site as a high-end marketing landing page (static/hybrid showcase) for the "Marble" product and World API. No SaaS dashboard features included in this build.

## 2. Data Origin
- Core assets (Hero background videos, 3D showcases) are hardcoded/mocked using highly optimized `.webm` or `.mp4` videos via CDN.
- Dynamic Content ("Research & Insights", "Marble Labs") should be structured to easily connect to a Headless CMS in the future (use mock data arrays for now).

## 3. Priority Features (15-Minute Build)
- **The Hero/Visual Showcase:** Immediate, high-fidelity visual feedback (auto-playing video) that communicates spatial intelligence without lagging.
- **"From Pixels to Worlds" Feature Grid:** Highly polished, responsive bento-box grid with smooth hover states and embedded micro-videos.
- **Smooth Page Routing & Typography:** Flawless typography and seamless transitions.

## 4. Auth & State
- Standard React local state.
- No authentication or complex global state management required.

## 5. Interactivity Needs
- Faked 3D via highly optimized videos.
- Complex CSS and Framer Motion animations (text reveals, scroll-linked interactivity).
- *Strict Rule:* Avoid deep interactive WebGL/Three.js components to preserve load times and SEO.

## 6. Stack Preferences
- Next.js (App Router, Server-Side Rendering)
- Tailwind CSS
- Framer Motion (for scroll animations and interactive reveals)
- Custom Tailwind components preferred over standard Shadcn for maximum creative branding.
