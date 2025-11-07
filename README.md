# 🚀 Idea Connect – A Platform for Ideas & Investments

**Idea Connect** is a full-stack web application built to bridge the gap between **idea creators** and **investors**.  
Users can post their innovative ideas, and investors can explore, review, and invest in promising opportunities.  

---

Live Link : https://idea-nect-hackathon-project-5grs.vercel.app/

## 🖥️ Tech Stack

### 🔹 Frontend
- **React.js** – Component-based UI framework  
- **Tailwind CSS** – Utility-first modern CSS framework  
- **DaisyUI** – Tailwind-based UI components for faster development  
- **React Icons** – Beautiful and scalable icon set  

### 🔹 Backend
- **Node.js** – JavaScript runtime for scalable server-side applications  
- **Express.js** – Lightweight web framework for building REST APIs  
- **MongoDB** – NoSQL database for fast and flexible data storage  

---

## ⚙️ Features

✅ User Authentication (Register/Login)  
✅ Create, Edit, and Delete Idea Posts  
✅ Explore & Filter Ideas by Category or Popularity  
✅ Investors Can View & Connect with Idea Owners  
✅ Fully Responsive Design  
✅ Modern UI built with Tailwind + DaisyUI  



File Structure:
IdeaNect_Hackathon_Project/
├─ .gitignore
├─ README.md
├─ docker-compose.yml          # optional: local dev with frontend+backend+mongo
├─ .env.example
├─ frontend/
│  └─ ideanect/
│     ├─ package.json
│     ├─ tailwind.config.cjs
│     ├─ postcss.config.cjs
│     ├─ public/
│     │  ├─ index.html
│     │  └─ favicon.ico
│     ├─ src/
│     │  ├─ main.jsx
│     │  ├─ app.css               # imports Tailwind base/components/utilities
│     │  ├─ routes/
│     │  │  ├─ AppRoutes.jsx
│     │  │  └─ PrivateRoute.jsx
│     │  ├─ pages/
│     │  │  ├─ Home.jsx
│     │  │  ├─ Explore.jsx
│     │  │  ├─ IdeaDetail.jsx
│     │  │  ├─ CreateIdea.jsx
│     │  │  ├─ Profile.jsx
│     │  │  ├─ Login.jsx
│     │  │  └─ Register.jsx
│     │  ├─ components/
│     │  │  ├─ layout/
│     │  │  │  ├─ Navbar.jsx
│     │  │  │  └─ Footer.jsx
│     │  │  ├─ idea/
│     │  │  │  ├─ IdeaCard.jsx
│     │  │  │  └─ IdeaForm.jsx
│     │  │  ├─ ui/
│     │  │  │  ├─ Button.jsx
│     │  │  │  └─ Modal.jsx
│     │  │  └─ common/
│     │  │     └─ Avatar.jsx
│     │  ├─ hooks/
│     │  │  ├─ useAuth.js
│     │  │  └─ useFetch.js
│     │  ├─ context/
│     │  │  └─ AuthContext.jsx
│     │  ├─ services/
│     │  │  └─ api.js             # axios instance + interceptors
│     │  ├─ utils/
│     │  │  └─ helpers.js
│     │  └─ assets/
│     │     ├─ images/
│     │     └─ icons/
│     └─ README.frontend.md
│
└─ backend/
   ├─ package.json
   ├─ server.js (or app.js)
   ├─ .env.example
   ├─ config/
   │  └─ db.js                   # mongodb connection
   ├─ controllers/
   │  ├─ authController.js
   │  ├─ ideaController.js
   │  └─ userController.js
   ├─ models/
   │  ├─ User.model.js
   │  └─ Idea.model.js
   ├─ routes/
   │  ├─ auth.routes.js
   │  ├─ idea.routes.js
   │  └─ user.routes.js
   ├─ middlewares/
   │  ├─ authMiddleware.js
   │  └─ errorHandler.js
   ├─ utils/
   │  └─ validators.js
   ├─ seed/
   │  └─ seed.js                 # optional demo data script
   ├─ uploads/                    # if storing image uploads locally (gitignored)
   ├─ tests/                      # optional: integration/unit tests
   └─ README.backend.md


---

## 🗂️ Project Structure

