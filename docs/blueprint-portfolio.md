# Blueprint Portfolio V2

Cetak biru ini dirancang untuk menunjukkan keahlian teknis Anda dalam transisi dari **PHP Native ke Laravel** dengan estetika visual yang adaptif dan struktur kode yang bersih.

---
## 1. Arsitektur Teknologi (The Ultimate Tech Stack)

- **Framework:** Vite + React 18/19 (Performa maksimal & modern).

- **CMS:** Sanity.io (Manajemen konten dinamis tanpa _hard-coding_).

- **Styling:** Tailwind CSS + shadcn@latest (Konsistensi desain & aksesibilitas).

- **Animations:** Framer Motion (Transisi _scroll_ yang halus & mikro-interaksi).

- **Theme Management:** `next-themes` atau React Context untuk deteksi **Default System Theme**.

- **Dev Tools**: 
	- @eslint/js
	- @tailwindcss/vite	    
	- @types/node	    
	- @types/react	    
	- @types/react-dom	    
	- @vitejs/plugin-react	    
	- eslint
	- eslint-config-prettier	    
	- eslint-plugin-prettier	    
	- eslint-plugin-react-hooks	    
	- eslint-plugin-react-refresh	    
	- globals	    
	- prettier	    
	- prettier-plugin-tailwindcss	    
	- typescript	    
	- typescript-eslint	    
	- vite

---

## 2. Struktur Folder (Project Organization)

Berikut adalah struktur folder yang direkomendasikan untuk menjaga skalabilitas proyek Anda:

```
portfolio-app/
├── public/              # Aset statis (Favicon, robots.txt)
├── src/
│   ├── components/      # UI Components (Reusable)
│   │   ├── ui/          # Shadcn UI components
│   │   ├── shared/      # Navbar, Footer, SectionWrapper
│   │   ├── layouts/     # Wrapper utama (MainLayout, dll)
│   │   └── features/    # Section utama (storytelling layer)
│   │       ├── Hero/
│   │       ├── Skillset/
│   │       ├── Projects/
│   │       ├── Experience/
│   │       ├── Education/
│   │       └── Contact/
│   ├── hooks/           # Custom hooks (useTheme, useSanity)
│   ├── lib/             # Config & utilities
│   ├── styles/          # Global CSS & Tailwind config
│   ├── types/           # Global TypeScript types
│   └── App.tsx          # Entry point utama
├── studio/              # Sanity Studio schemas & config
├── tailwind.config.js   # Konfigurasi theme & dark mode
└── tsconfig.json        # Konfigurasi TypeScript
```

---

## 3. Strategi Dark & Light Mode

Sistem akan secara otomatis mendeteksi preferensi tema pengguna melalui `prefers-color-scheme`.

|**Feature**|**Light Mode (Day)**|**Dark Mode (Night)**|
|---|---|---|
|**Background**|Putih Bersih / Light Gray|Deep Charcoal / Midnight Blue|
|**Typography**|Slate 900 (High Contrast)|Slate 100 (Soft White)|
|**Hero Visual**|Soft Mesh Gradients|Electric Blue Glow / Neon Accents|
|**Cards**|Subtle Borders & Shadows|Glassmorphism with Low Opacity|

---

## 4. Konsep Visual: The Scrolling Story (Hybrid Edition - Updated)

| **Section**        | **Komponen**              | **Visual & Konten Spesifik**                                                                                                                             |
| ------------------ | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **01. Hero**       | **Hybrid Typography**     | Gabungan _Interactive Typography_ & _Glassmorphic Profile_. **Dual Action:** "View Projects" (Smooth Scroll) & "Download CV" (Secondary/Outline).        |
| **02. Project**    | **Horizontal Slider**     | **Snap-scroll Gallery**. Menggunakan `w-[85vw]` di mobile dan `lg:w-[31%]` di desktop. Fitur: Hover overlay (desktop) & Compact badges (mobile).         |
| **03. Skillset**   | **Bento Grid**            | Tata letak kotak asimetris dengan ikon interaktif yang dikelompokkan menjadi: Backend, Frontend, dan Tools.                                              |
| **04. Experience** | **Single Open Accordion** | **Exclusive-open Pattern**. Hanya satu pengalaman yang terbuka untuk menjaga fokus. Header responsif (`flex-col` ke `sm:flex-row`) untuk optimasi ruang. |
| **05. Education**  | **Minimalist List**       | List bersih dengan _typography_ yang mengutamakan jenjang akademik dan sertifikasi profesional secara formal.                                            |
| **06. Contact**    | **CTA Footer**            | Penutup elegan dengan grid atau list tautan sosial media yang menggunakan **magnet effect** atau **dynamic hover border**.                               |

---

## 5. Skema Data

```
about
- name (Name) string
- mainImage (Profile Picture) image
- bio (Bio) text
- resume (Upload CV (PDF)) file

contact
- email (Email Address) string
- linkedin (LinkedIn URL) url
- github (Github URL) url
- whatsapp (Whatsapp URL) url

education
- school (School Name) string
- major (Major (Optional)) string
- periode (Period (e.g 2000 - 2010)) string
- description (Story/Description) text
- order (Order Settings) number

experience
- company (Company) string
- role (Role) string
- date (Month - Year (e.g. Mei 2026 - Juli 2026)) string
- description (Description) text
- order (Order Settings) number

project
- title (Project Title) string
- description (Description) text
- image (Screenshots) image
- primaryStack (Primary Stack) string
- tags (Tech Stack) array of string
- github (Github Link) url
- demo (Demo Link) url
- order (Order Settings) number

skill
- title (Skill Name) string
- type (Type/Category) string 
	option: Frontend, Backend, Database, Other/Tools (Value Other)
- icon (Icon (Lucide Name)) string
- order (Order Settings) object {desktop, mobile}
```

---


