# 🛒 Shopco – Modern E-Commerce Template (Next.js + Tailwind CSS)

Shopco is a modern, responsive, and fully customizable e-commerce template built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Zustand** for state management. It is designed for developers who want to quickly build a stylish and functional shopping experience.

---

## 🚀 Features

- 🔥 **Next.js 14 App Router**
- 💅 **Tailwind CSS** – Utility-first styling
- 🧠 **Zustand** – Global cart state management
- 🧩 **Dynamic filters** (category, style, color, size, price)
- 🛍️ **Product detail pages** with slug-based routing
- 💬 **Product reviews section**
- 🧭 **Breadcrumb navigation**
- 📱 **Responsive UI** (mobile-first design)
- 💡 **Framer Motion** animations for better UX
- ⚡ **Performance-optimized rendering**
- 📦 Skeleton loading effects
- 🌙 Optional **dark mode** support *(coming soon)*

---

## 🖼️ Preview

> **Live demo** (Coming Soon)

![Shopco Preview](./public/preview.png)

---

## 📦 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/canbalkac/shopco.git
cd shopco
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Then visit: `http://localhost:3000`

---

## ⚙️ Tech Stack

| Layer         | Technology           |
|---------------|----------------------|
| Frontend      | React + Next.js 14   |
| Styling       | Tailwind CSS         |
| State         | Zustand              |
| Animations    | Framer Motion        |
| Types         | TypeScript           |
| UI Components | Custom + Headless UI |
| Icons         | Lucide Icons         |

---

## 📁 Folder Structure Overview

```
src/
│
├── app/                     # Next.js app router pages
│   ├── shop/                # Dynamic filtering & product listings
│   └── product/[slug]/      # Product detail pages
│
├── components/             # UI + feature components
├── lib/                    # Data fetching + helper utils
└── public/                 # Static assets
```

---

## 🌐 Deployment

You can easily deploy this app to **Vercel**:

```bash
vercel deploy
```

---

## 📌 Future Improvements

- 🔐 Authentication & admin dashboard
- 💳 Checkout flow (Stripe/PayPal)
- 🌓 Dark mode toggle
- 🛠️ CMS integration (e.g. Sanity or Strapi)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙌 Acknowledgements

- Inspired by modern e-commerce UI patterns
- Powered by Next.js 14 App Router

---

## 👤 Author

Made with ❤️ by [@canbalkac](https://github.com/canbalkac)