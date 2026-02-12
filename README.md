# Nexus-Commerce Engine

A production-ready, cloud-native e-commerce platform built with modern web technologies and deployed using Kubernetes. This unified commerce engine combines a React-based frontend with a Node.js/Express backend, implementing Atomic Design principles and robust persistent state management.

## 🏗️ Architecture Overview

Nexus-Commerce follows a microservices architecture with clear separation between frontend and backend services, orchestrated through Kubernetes for scalable, resilient deployments.

### Technology Stack

- **Frontend**: React 18, React Router, TailwindCSS, React Hot Toast
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Infrastructure**: Kubernetes, Docker, Nginx Ingress
- **CI/CD**: GitHub Actions
- **Payment**: Stripe Integration

## 📁 Project Structure

```
Nexus-Commerce/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── Components/      # Atomic Design components
│   │   │   ├── Navbar/      # Navigation component
│   │   │   ├── Hero/        # Hero section
│   │   │   ├── Footer/      # Footer component
│   │   │   ├── Cartpage/    # Cart management
│   │   │   └── ...
│   │   ├── Context/         # React Context for state management
│   │   │   └── ShopContext.jsx
│   │   └── Pages/           # Page-level components
│   ├── public/              # Static assets
│   └── Dockerfile           # Frontend containerization
├── backend/                 # Node.js/Express API
│   ├── index.js            # Main server file
│   ├── upload/             # File uploads directory
│   └── Dockerfile          # Backend containerization
├── k8s/                    # Kubernetes manifests
│   ├── frontend-deployment.yaml
│   ├── backend-deployment.yaml
│   └── ingress.yaml
├── .github/
│   └── workflows/
│       └── deploy.yml      # CI/CD pipeline
└── README.md
```

## 🎨 Atomic Design Architecture

The frontend follows **Atomic Design** principles, organizing components into a hierarchical structure:

### Component Hierarchy

1. **Atoms** (Basic building blocks)
   - Buttons, Inputs, Icons, Images
   - Located in shared component libraries

2. **Molecules** (Simple component groups)
   - Form fields with labels
   - Navigation items
   - Product cards

3. **Organisms** (Complex UI components)
   - `Navbar/` - Complete navigation bar
   - `Hero/` - Hero section with CTA
   - `Cartpage/` - Shopping cart interface
   - `Productdisplay/` - Product detail view

4. **Templates** (Page layouts)
   - `Pages/Shop.jsx` - Product listing page
   - `Pages/Cart.jsx` - Shopping cart page
   - `Pages/Product.jsx` - Product detail page

5. **Pages** (Fully rendered views)
   - Complete user-facing pages with data

### Component Organization

Components are organized by feature/domain, promoting:
- **Reusability**: Components can be composed across different pages
- **Maintainability**: Clear separation of concerns
- **Scalability**: Easy to add new features without affecting existing code
- **Testability**: Isolated components are easier to test

## 🔄 Persistent State Logic

Nexus-Commerce implements a multi-layered state persistence strategy:

### 1. React Context API (Application State)

**ShopContext** (`frontend/src/Context/ShopContext.jsx`) provides global state management:

```javascript
- cartdata: Cart state synchronized with backend
- allproduct: Product catalog cache
- addtocart(): Add items with backend sync
- removefromcart(): Remove items with backend sync
```

**Features**:
- Real-time cart synchronization with backend API
- Optimistic UI updates for better UX
- Automatic state hydration on app load
- Token-based authentication state

### 2. localStorage (Client-Side Persistence)

**Authentication Tokens**:
- `auth-token`: JWT token stored for session persistence
- Survives page refreshes and browser restarts
- Automatically included in API requests

**State Hydration Flow**:
1. App loads → Check `localStorage` for `auth-token`
2. If token exists → Fetch user cart data from backend
3. Populate `ShopContext` with persisted cart state
4. User continues from last session state

### 3. MongoDB StatefulSet (Database Persistence)

**Kubernetes StatefulSet** ensures database persistence:
- Persistent Volume Claims (PVC) for data storage
- StatefulSet maintains pod identity across restarts
- Data survives pod crashes and deployments
- Automatic volume reattachment on pod recreation

**Data Models**:
- **User**: Email, name, password, `cartData` (persistent cart)
- **Product**: ID, name, image, category, pricing, availability

### 4. State Synchronization Strategy

```
User Action → React State Update → API Call → MongoDB Update
     ↓              ↓                    ↓           ↓
  Optimistic    Context Update      Backend      Database
   UI Update    (Immediate)         Validation   Persistence
```

**Benefits**:
- **Immediate Feedback**: UI updates instantly
- **Data Consistency**: Backend validates and persists
- **Offline Resilience**: localStorage provides fallback
- **Crash Recovery**: MongoDB ensures data durability

## 🚀 Deployment

### Prerequisites

- Docker & Docker Compose
- Kubernetes cluster (minikube, GKE, EKS, or AKS)
- kubectl configured
- Nginx Ingress Controller installed

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/achalcipher/Nexus-Commerce.git
   cd Nexus-Commerce
   ```

2. **Build Docker images**:
   ```bash
   docker build -t nexus-commerce-frontend:latest ./frontend
   docker build -t nexus-commerce-backend:latest ./backend
   ```

3. **Deploy to Kubernetes**:
   ```bash
   kubectl apply -f k8s/frontend-deployment.yaml
   kubectl apply -f k8s/backend-deployment.yaml
   kubectl apply -f k8s/ingress.yaml
   ```

4. **Access the application**:
   - Frontend: `http://storefront.nexus-commerce.com`
   - Backend API: `http://api.nexus-commerce.com`

### Production Deployment

The CI/CD pipeline automatically:
1. Builds Docker images on push to `master`/`main`
2. Pushes images to Docker Hub
3. Updates Kubernetes deployments
4. Performs rolling updates with zero downtime

**Required Secrets**:
- `DOCKER_USERNAME`: Docker Hub username
- `DOCKER_PASSWORD`: Docker Hub password/token
- `KUBECONFIG`: Base64-encoded kubeconfig file

## 🔧 Configuration

### Environment Variables

**Frontend** (`k8s/frontend-deployment.yaml`):
- `REACT_APP_API_URL`: Backend API endpoint

**Backend** (`k8s/backend-deployment.yaml`):
- `NODE_ENV`: Environment (production/development)
- `PORT`: Server port (default: 5000)
- `MONGODB_URI`: MongoDB connection string
- `JWT_SECRET`: JWT signing secret
- `STRIPE_SECRET_KEY`: Stripe API secret key

### Kubernetes Resources

- **Frontend**: 3 replicas with LoadBalancer service
- **Backend**: 2 replicas with ClusterIP service
- **Ingress**: Nginx-based routing with TLS termination

## 📊 Monitoring & Health Checks

### Health Endpoints

- **Frontend**: `GET /` (readiness & liveness)
- **Backend**: `GET /api/health` (readiness & liveness)

### Resource Limits

**Frontend**:
- Requests: 100m CPU, 128Mi memory
- Limits: 500m CPU, 256Mi memory

**Backend**:
- Requests: 200m CPU, 256Mi memory
- Limits: 1000m CPU, 512Mi memory

## 🔐 Security

- JWT-based authentication
- HTTPS/TLS via Ingress
- Environment-based secret management
- CORS configuration for API security
- Input validation and sanitization

## 🧪 Testing

```bash
# Frontend tests
cd frontend
npm test

# Backend API tests
cd backend
npm test
```

## 📝 Development Guidelines

### Atomic Design Best Practices

1. **Start Small**: Build atoms before molecules
2. **Compose Up**: Combine smaller components into larger ones
3. **Single Responsibility**: Each component has one clear purpose
4. **Prop Types**: Define clear interfaces for components
5. **Reusability**: Design components for multiple use cases

### State Management Guidelines

1. **Context for Global State**: Use React Context for app-wide state
2. **localStorage for Persistence**: Store tokens and user preferences
3. **Backend as Source of Truth**: Always sync critical data with backend
4. **Optimistic Updates**: Update UI immediately, sync in background

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

