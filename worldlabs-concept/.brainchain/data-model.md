# 🗄️ World Labs Data Model

**Scope:** Static/Hybrid Marketing Showcase

## 1. Research & Insights (Articles)
- `id`: string (UUID)
- `title`: string
- `slug`: string
- `excerpt`: text
- `coverImage`: string (URL)
- `author`: string
- `publishedAt`: date
- `content`: richtext/markdown
- `category`: string (e.g., "Engineering", "Announcements")

## 2. Marble Labs (Case Studies/Features)
- `id`: string (UUID)
- `title`: string
- `subtitle`: string
- `description`: text
- `mediaUrl`: string (video/asset URL)
- `type`: enum ("multimodal", "interactive", "simulation")
- `link`: string (URL)
