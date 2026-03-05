# 🧩 World Labs UI Inventory

## Framework Elements (Next.js + Tailwind CSS + Framer Motion)

### 1. Global Components
- `Navigation`: Fixed/floating transparent header with backdrop blur (`backdrop-blur-md`).
- `Footer`: Clean linework, multi-column directory layout.

### 2. Marketing Sections
- `HeroSection`: Full-bleed, text-reveal animations, auto-playing background video (`.webm`/`.mp4`).
- `FeatureGrid` (Bento Box): "From Pixels to Worlds" sections, varying card sizes spanning columns.
- `ContentRow`: For Research & Insights, text on one side, image/video on the other.

### 3. Interactive Elements (Framer Motion)
- `FadeInUp`: Scroll-triggered reveal for text and cards.
- `HoverCard`: Subtle scale (`scale-[1.02]`) and border glow on bento cards.
- `VideoPlayer`: Auto-playing, muted, looping, optimized videos within boundaries.

### 4. Shadcn UI / Base Tailwind Priorities
- `Button`: Clean pill-shaped or rounded-full buttons, high contrast (`bg-white text-black`).
- `Card`: Used for bento boxes with custom border and gradient backgrounds.
