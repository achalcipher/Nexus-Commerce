# Build stage
FROM node:18-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN echo 'server{listen 80;location /{root /usr/share/nginx/html;index index.html;try_files $uri $uri/ /index.html;}location /health{return 200 ok;add_header Content-Type text/plain;}}' > /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
