# 🚀 Portfolio v2

Modern personal portfolio built with React 19, Vite, and Sanity.io. Proyek ini merupakan showcase teknis dari transisi karier PHP Native menuju ekosistem Modern Full-stack/Backend, dengan fokus utama pada Type Safety, Data Integrity, dan Scalable Architecture.

---

## 🛠️ Tech Stack

- **Frontend:** React 19 + Vite (v6/v7 ready)

- **Routing:** React Router v7 (Data Router Pattern)

- **Styling:** Tailwind CSS + Shadcn UI

- **Animation:** Framer Motion

- **CMS:** Sanity.io (Headless CMS)

- **Language:** TypeScript

---

## 📂 Folder Structure

```text
├── studio/              # Sanity.io CMS (Backend)
│   ├── schemas/         # Data models (Project, Experience, etc)
│   └── .env             # CMS environment variables
├── src/                 # Frontend (React)
│   ├── assets/          # Icons, images, fonts
│   ├── components/      # UI Components (UI, Features, Custom)
│   ├── hooks/           # Custom hooks (useSanity, etc)
│   ├── layouts/         # Page layouts (HomeLayout)
│   ├── lib/             # Configurations (Sanity client, utils)
│   ├── styles/          # Global CSS & Tailwind styles
│   └── main.tsx         # App Entry & Router Provider (V7)
├── .env                 # Frontend environment variables
├── eslint.config.js     # Frontend environment variables
├── tailwind.config.js   # Frontend environment variables
├── vite.config.ts       # Frontend environment variables
└── tsconfig.json        # TypeScript configuration
```

---

## 🚀 Key Features & Implementation

### 🎨 Visual Experience & Interactions

- The Scrolling Story (Hybrid Edition): Narasi transisi karier dari PHP Native ke Laravel/React yang divisualisasikan melalui Interactive Typography dan Glassmorphic profil.

- Project Showcase (Horizontal Gallery with Drag-to-Scroll): Galeri karya menggunakan Horizontal Scroll Card yang mendukung gerakan seret (*click-and-drag*) dengan kursor responsif (`cursor-grab` / `grabbing`), dilengkapi perlindungan *click-capture* untuk mencegah klik tautan saat menyeret, serta transisi *scroll-snapping* dinamis.

- Responsive Navigation & Mobile Menu: Sistem navigasi desktop yang bersih dan menu burger mobile yang mulus menggunakan transisi tinggi/opasitas dari Framer Motion (`AnimatePresence`) untuk aksesibilitas di perangkat mobile.

- Experience Timeline (Single Open Accordion): Visualisasi riwayat profesional menggunakan sistem Accordion yang hanya mengizinkan satu item terbuka (Single Open) guna menjaga fokus pengguna dan kebersihan tata letak.

- Dynamic Theme Switching: Sistem deteksi otomatis tema sistem operasi dengan transisi halus menggunakan next-themes dan variabel CSS Shadcn.

### 🛠️ Technical Excellence (The "Backend" Mindset)

- Zero Any Policy & Type Safety: Integrasi penuh Sanity Typegen untuk memastikan seluruh data dari CMS memiliki skema TypeScript yang eksplisit.

- Data Integrity & Graceful Degradation: Penerapan Optional Chaining (?.) dan Nullish Coalescing (??) di seluruh komponen untuk mencegah crash saat data CMS kosong, dilengkapi dengan Skeleton Screens.

- Advanced Image Optimization: Semua aset visual diproses melalui @sanity/image-url untuk mendukung format .webp dan auto-resize secara on-the-fly.

- Modern TSConfig Standards: Konfigurasi TypeScript yang bersih dan modern dengan menghilangkan opsi usang seperti `baseUrl` dan parameter ignoreDeprecations untuk mengikuti standar kompilasi compiler TypeScript 6.x.

- Scalable Component Architecture: Pemisahan struktur folder antara ui/ (stateless/visual) dan features/ (logic-heavy) guna mendukung skalabilitas jangka panjang.

- Performance First: Implementasi Tree-shaking pada library ikon dan penggunaan properti viewport={{ once: true }} pada Framer Motion untuk menjaga performa browser tetap ringan.

---

## ⚙️ Environment Setup

Buat file `.env` di **Root** dan **Studio** folder:

Cuplikan kode

```
# Frontend (Vite)
VITE_SANITY_PROJECT_ID=your_id
VITE_SANITY_DATASET=production

# Sanity Studio
SANITY_STUDIO_PROJECT_ID=your_id
SANITY_STUDIO_DATASET=production
```

---

## 🛠️ Development Workflow

1. **Install Dependencies:**

```bash
npm install
```

2. **Run Frontend:**

```bash
npm run dev
```

3. **Run Sanity Studio:**

```bash
cd studio && npm run dev
```
