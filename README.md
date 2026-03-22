<div align="center">

```
███╗   ██╗███████╗██╗  ██╗██╗   ██╗███████╗
████╗  ██║██╔════╝╚██╗██╔╝██║   ██║██╔════╝
██╔██╗ ██║█████╗   ╚███╔╝ ██║   ██║███████╗
██║╚██╗██║██╔══╝   ██╔██╗ ██║   ██║╚════██║
██║ ╚████║███████╗██╔╝ ██╗╚██████╔╝███████║
╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝
         C O M M E R C E
```

### 🛍️ A full-stack e-commerce platform built for speed, style, and scale

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer-Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

</div>

---

## ⚡ What is NexusCart?

NexusCart is a modern, animated full-stack e-commerce app. Browse products by category, manage your cart in real-time, and checkout — all with smooth animations and a clean UI.

---

## 🗺️ App Flow

```mermaid
flowchart TD
    A([🌐 User Opens App]) --> B{Logged In?}
    B -- No --> C[🔒 Login / Signup Page]
    B -- Yes --> D[🏠 Home Page]
    C --> E[📝 Create Account or Sign In]
    E --> D

    D --> F[🛍️ Browse Shop]
    D --> G[👔 Men's Category]
    D --> H[👗 Women's Category]
    D --> I[🧒 Kids' Category]

    F & G & H & I --> J[🔍 View Product Detail]
    J --> K{Add to Cart?}
    K -- Yes --> L[🛒 Cart Updated]
    K -- No --> F

    L --> M[📦 Cart Page]
    M --> N{Checkout?}
    N -- Yes --> O[✅ Order Confirmed]
    N -- No --> F

    style A fill:#ff4757,color:#fff,stroke:none
    style O fill:#2ed573,color:#fff,stroke:none
    style D fill:#5352ed,color:#fff,stroke:none
    style C fill:#ffa502,color:#fff,stroke:none
```

---

## 🏗️ System Architecture

```mermaid
flowchart LR
    subgraph CLIENT["🖥️ Frontend — React 18"]
        direction TB
        N[Navbar] --> CTX
        H[Hero] --> CTX
        P[Popular] --> CTX
        NC[New Collections] --> CTX
        CART[Cart Page] --> CTX
        CTX[🔄 ShopContext\nGlobal State]
    end

    subgraph SERVER["⚙️ Backend — Node / Express"]
        direction TB
        API[REST API\nlocalhost:4000]
        MW[JWT Middleware\nAuth Guard]
        API --> MW
    end

    subgraph DB["🗄️ Database — MongoDB Atlas"]
        U[(Users\nCollection)]
        PR[(Products\nCollection)]
    end

    CLIENT -- HTTP Fetch --> SERVER
    SERVER -- Mongoose --> DB
    CTX -- localStorage --> LS[🔑 auth-token]

    style CLIENT fill:#1e1e2e,color:#cdd6f4,stroke:#89b4fa
    style SERVER fill:#1e1e2e,color:#cdd6f4,stroke:#a6e3a1
    style DB fill:#1e1e2e,color:#cdd6f4,stroke:#f38ba8
```

---

## 🔐 Auth Flow

```mermaid
sequenceDiagram
    actor User
    participant Frontend
    participant Backend
    participant MongoDB

    User->>Frontend: Enter email + password
    Frontend->>Backend: POST /signup or /login
    Backend->>MongoDB: Find or create user
    MongoDB-->>Backend: User document
    Backend-->>Frontend: JWT token
    Frontend->>Frontend: Save token to localStorage
    Frontend-->>User: Redirect to Home 🎉

    Note over Frontend,Backend: Every cart action sends auth-token header
```

---

## 🛒 Cart State Flow

```mermaid
stateDiagram-v2
    [*] --> Empty : App loads
    Empty --> HasItems : addtocart()
    HasItems --> HasItems : addtocart() / removefromcart()
    HasItems --> Empty : All items removed
    HasItems --> Checkout : Proceed to checkout
    Checkout --> [*] : Order confirmed ✅

    note right of HasItems
        State synced with MongoDB
        via POST /addtocart
        and POST /removefromcart
    end note
```

---

## 📁 Project Structure

```
Nexus-Commerce/
│
├── 🎨 frontend/
│   ├── src/
│   │   ├── Components/
│   │   │   ├── 🧭 Navbar/          ← Sticky animated navbar
│   │   │   ├── 🦸 Hero/            ← Floating hero with blobs
│   │   │   ├── 🔥 Popular/         ← Women's trending products
│   │   │   ├── ✨ New collections/ ← Latest drops
│   │   │   ├── 🎁 Offers/          ← Gradient promo banner
│   │   │   ├── 📧 Newsletter/      ← Email subscribe
│   │   │   ├── 🛒 Cartpage/        ← Animated cart UI
│   │   │   ├── 📦 Productdisplay/  ← Product detail view
│   │   │   └── 🏷️ Item/            ← Product card with hover
│   │   ├── Context/
│   │   │   └── ShopContext.jsx     ← Global state (cart + products)
│   │   └── Pages/
│   │       ├── Shop.jsx
│   │       ├── ShopCategory.jsx
│   │       ├── Product.jsx
│   │       ├── Cart.jsx
│   │       └── LoginSignup.jsx
│   └── package.json
│
└── ⚙️ backend/
    ├── index.js                    ← Express server + all routes
    ├── upload/images/              ← Product image uploads
    └── package.json
```

---

## 🚀 Getting Started

```mermaid
flowchart LR
    A[📥 Clone Repo] --> B[📦 Install Backend\nnpm install]
    B --> C[▶️ Start Backend\nnpm start\nlocalhost:4000]
    C --> D[📦 Install Frontend\nnpm install]
    D --> E[▶️ Start Frontend\nnpm start\nlocalhost:3000]
    E --> F[🎉 Open Browser]

    style A fill:#ff6b6b,color:#fff,stroke:none
    style F fill:#51cf66,color:#fff,stroke:none
```

```bash
# 1. Clone
git clone https://github.com/achalcipher/Nexus-Commerce.git

# 2. Backend
cd Nexus-Commerce/backend
npm install
npm start          # → running on :4000

# 3. Frontend (new terminal)
cd Nexus-Commerce/frontend
npm install
npm start          # → opens on :3000
```

---

## 🔌 API Reference

```mermaid
mindmap
  root((🔌 API\nlocalhost:4000))
    Products
      GET /allproducts
      GET /newcollections
      GET /popularwom
      POST /addproduct
      POST /removeproduct
    Auth
      POST /signup
      POST /login
    Cart 🔒
      POST /addtocart
      POST /removefromcart
      POST /getcartdata
    Media
      POST /upload
      GET /images/:filename
```

> 🔒 Cart routes require `auth-token` header (JWT)

---

## 🎨 Tech Stack at a Glance

| Layer | Tech | Purpose |
|-------|------|---------|
| 🖼️ UI | React 18 + Tailwind | Component-based UI |
| 🎬 Animations | Framer Motion | Page & hover animations |
| 🔀 Routing | React Router v6 | Client-side navigation |
| 🔔 Toasts | React Hot Toast | User feedback |
| ⚙️ Server | Express.js | REST API |
| 🔐 Auth | JWT | Stateless authentication |
| 🗄️ Database | MongoDB Atlas | Cloud NoSQL storage |
| 📁 Uploads | Multer | Product image handling |

---

## 🤝 Contributing

```mermaid
gitGraph
   commit id: "Initial commit"
   branch feature/your-feature
   checkout feature/your-feature
   commit id: "Add your changes"
   commit id: "Write tests"
   checkout main
   merge feature/your-feature id: "PR merged 🎉"
```

1. Fork the repo
2. Create your branch: `git checkout -b feature/cool-thing`
3. Commit: `git commit -m "feat: add cool thing"`
4. Push: `git push origin feature/cool-thing`
5. Open a Pull Request

---

<div align="center">

Made with ❤️ by [achalcipher](https://github.com/achalcipher)

⭐ Star this repo if you found it useful!

</div>
