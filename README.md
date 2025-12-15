# 3M Building Services - Demo Website

Professional website for 3M Building Services, a London-based building and construction company.

## 🚀 Quick Start

The development server is already running at:
- **Local**: http://localhost:3001
- **Network**: http://192.168.0.15:3001

To stop the server:
```bash
# Find the process and kill it, or press Ctrl+C in the terminal
```

To start it again:
```bash
npm run dev
```

## 📋 Features Implemented

✅ **Homepage with Animations**
- Parallax hero section with blueprint background
- Animated statistics counters
- Featured services preview
- Call-to-action section

✅ **Blueprint-Inspired Design**
- Custom Tailwind theme with blueprint colors
- Grid pattern overlays
- Architectural aesthetic matching the logo

✅ **Framer Motion Animations**
- Scroll-triggered reveals
- Staggered content animations
- Smooth hover effects
- Parallax effects

✅ **Responsive Design**
- Mobile-first approach
- Animated mobile menu
- Fully responsive across all breakpoints

✅ **Professional Components**
- Reusable UI components (Button, Card, Container)
- Layout components (Header, Footer, Navigation)
- Animation wrappers (FadeInWhenVisible, StaggerChildren)

## 📁 Project Structure

```
3m-building-services/
├── app/                      # Next.js pages
├── components/
│   ├── animations/          # Animation wrappers
│   ├── home/               # Homepage components
│   ├── layout/             # Header, Footer, Nav
│   └── ui/                 # Base UI components
├── data/                    # Content data
├── lib/                     # Utilities and animations
├── types/                   # TypeScript definitions
└── public/images/          # Images and assets
```

## 🎨 Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## ✏️ Customization Guide

### Update Company Information
Edit `data/company.ts`:
- Phone number (currently placeholder)
- Email address
- Social media links

### Add Services
Edit `data/services.ts`:
- Add/remove services
- Update descriptions
- Change featured services

### Update Statistics
Edit `data/stats.ts`:
- Modify numbers
- Add new stats

### Change Colors
Edit `tailwind.config.ts`:
- Blueprint colors
- Construction colors
- Custom color palette

## 📝 TODO

- [ ] Add real phone number in `data/company.ts`
- [ ] Create About page
- [ ] Create Services page
- [ ] Create Gallery page with Instagram photos
- [ ] Create Contact page with form
- [ ] Add more project photos
- [ ] Replace placeholder content

## 🚀 Deployment

When ready to deploy:

```bash
# Build for production
npm run build

# Start production server
npm start
```

Deploy to Vercel:
```bash
vercel
```

## 📸 Adding Instagram Photos

1. Download photos from Instagram
2. Place them in `public/images/gallery/`
3. Update `data/gallery.ts` with image information
4. Images will automatically appear in the gallery

## 🎯 Next Steps

1. Browse to http://localhost:3001 to see the homepage
2. Update placeholder phone number
3. Add more images from Instagram
4. Build remaining pages (About, Services, Gallery, Contact)
5. Test on mobile devices
6. Deploy to Vercel

---

**Built with ❤️ for 3M Building Services**
