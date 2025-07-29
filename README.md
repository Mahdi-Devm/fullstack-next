# 🎨 ColorHunt Clone – Fullstack Next.js App

A beautiful fullstack clone of [ColorHunt](https://colorhunt.co/) built with **Next.js 15 App Router**, styled with modern UI using **Tailwind CSS**, and extended with **authentication**, **form validation**, and **JWT security**.

---

## 🚀 Features

- 🎨 Browse and explore beautiful color palettes  
- 🧑‍💻 Register & Login functionality  
- ✅ Form validation with [Zod](https://zod.dev/)  
- 🔐 Authentication using [JWT](https://jwt.io/)  
- 📦 Fullstack with [Prisma ORM](https://www.prisma.io/) and PostgreSQL (or any other DB)  
- 🌈 UI inspired by [ColorHunt](https://colorhunt.co/) + custom enhancements  
- 🪄 Soft UI effects and smooth transitions  
- 🧁 Responsive design, works great on mobile & desktop  

---

## 🧱 Tech Stack

| Layer      | Tech                                     |
|------------|------------------------------------------|
| Frontend   | `Next.js 15 (App Router)` + `React 19`   |
| Styling    | `Tailwind CSS`                           |
| Validation | `Zod`                                   |
| Auth       | `JWT` (token-based auth with cookie)    |
| Database   | `Prisma ORM` with SQLite/PostgreSQL/etc.|
| Icons      | `react-icons`                           |
| State      | `useState`, server-side logic with `next/headers` |
| Env Config | `dotenv`                                |

---

## 🖥️ Local Setup

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/colorhunt-clone.git
cd colorhunt-clone

    Install dependencies:

npm install

    Set environment variables:

Create a .env file based on .env.example:

DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret

    Generate Prisma client:

npx prisma generate

    Run the development server:

npm run dev

🔐 Authentication Flow

    Registration form sends data to a server action with Zod validation.

    On success, JWT is generated and stored in an HTTP-only cookie.

    Client reads cookie status via next/headers in Server Components.

    Protected routes check for token presence.

📸 UI/UX

    Color palette inspired by ColorHunt

    Responsive and accessible design

    Smooth modals, hover states, and focus effects

    Integrated react-icons for modern look

✨ Improvements over Original

    ✅ User registration & login system

    ✅ Server-side JWT auth with secure cookie

    ✅ Form validation & error handling

    ✅ Modular and maintainable folder structure

