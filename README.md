<div align="center">
  <h1 align="center" >📖 UniversalBible</h1>

  <p align="center">
    The Word, in your language. Instant access to Bibles without barriers.
    <br />
    <br />
    <a href="https://github.com/arvinfathi/universal-bible-web/issues">Report Bug</a>
    ·
    <a href="https://github.com/arvinfathi/universal-bible-web/issues">Request Feature</a>
  </p>
</div>

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

</div>

---

## 📖 UniversalBible

**UniversalBible** is a modern, web-based Bible reader designed to connect people with the Bible in their own language. It provides instant access to scripture with a focus on simplicity, speed, and accessibility.

---

## 🚀 Features

*   **Instant Access**: No login or downloads required. Start reading immediately.
*   **Multi-Language Support**: Access Bibles in various languages including English, Spanish, French, German, Chinese, Arabic, Farsi, and more.
*   **RTL Support**: Full support for right-to-left languages like Arabic, Farsi, and Hebrew.
*   **Clean Reading Experience**: Distraction-free interface with adjustable text size and zoom.
*   **Full-Text Search**: Search an entire Bible, with every match highlighted and quick next/previous navigation.
*   **Responsive Design**: Optimized for desktop, tablet, and mobile devices.

## 🧰 Tech Stack

| Tool | Version |
| --- | --- |
| [Node.js](https://nodejs.org/) | 24 LTS |
| [npm](https://www.npmjs.com/) | 11 |
| [Next.js](https://nextjs.org/) | 16.4 |
| [React](https://react.dev/) | 19.3 |
| [TypeScript](https://www.typescriptlang.org/) | 6.0 |
| [Tailwind CSS](https://tailwindcss.com/) | 4.3 |
| [PDF.js](https://mozilla.github.io/pdf.js/) (`pdfjs-dist`) | 6.4 |
| [Lucide](https://lucide.dev/) (`lucide-react`) | 1.x |

The reader uses the modern build of PDF.js, which requires an up-to-date browser (current Chrome, Edge, Firefox or Safari).

## 📂 Project Structure

```text
universal-bible-web/
├── app/                 # Next.js App Router pages and layouts
├── components/          # Reusable UI components (Header, Reader, etc.)
├── data/                # Static data (Bible versions, languages, index information)
├── public/              # Static assets
└── ...
```

## 🛠️ Getting Started

### Prerequisites

*   [Node.js](https://nodejs.org/) 24 LTS or newer (the repo includes an `.nvmrc`, so `nvm use` picks the right version)
*   npm 11 or newer (bundled with Node.js 24)

> Use npm rather than yarn, pnpm or bun: the project relies on npm's `package-lock.json` and the `overrides` field in `package.json`.

### Installation

1.  **Clone the repository**

```bash
git clone https://github.com/arvinfathi/universal-bible-web.git
cd universal-bible-web
```

2.  **Install dependencies**

```bash
npm install
```

3.  **Run the development server**

```bash
npm run dev
```

To try a production build locally, run `npm run build` first and then `npm run start`. `npm run start` only serves the last build, so rebuild after pulling changes.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
