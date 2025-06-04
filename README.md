# 📦 k8s-ingress-posts-service

A simple Kubernetes project demonstrating how to deploy a microservice (`posts`) and expose it to the internet using **NGINX Ingress Controller**.

This repo is ideal for learning, testing, and showcasing Ingress routing in Kubernetes.

---

## 📁 Project Structure
.
├── blog-client
│   ├── Dockerfile
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   │   ├── flower.svg
│   │   └── vite.svg
│   ├── README.md
│   ├── src
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── assets
│   │   │   └── react.svg
│   │   ├── CommentCreate.jsx
│   │   ├── CommentList.jsx
│   │   ├── index.css
│   │   ├── main.jsx
│   │   ├── PostCreate.jsx
│   │   └── PostList.jsx
│   └── vite.config.js
├── comments
│   ├── Dockerfile
│   ├── index.js
│   ├── package-lock.json
│   ├── package.json
│   └── README.md
├── event-bus
│   ├── Dockerfile
│   ├── index.js
│   ├── package-lock.json
│   └── package.json
├── infra
│   └── k8s
│       ├── client-depl.yaml
│       ├── comments-depl.yaml
│       ├── event-bus-depl.yaml
│       ├── ingress-srv.yaml
│       ├── moderation-depl.yaml
│       ├── posts-depl.yaml
│       ├── posts-srv.yaml
│       └── query-depl.yaml
├── moderation
│   ├── Dockerfile
│   ├── index.js
│   ├── package-lock.json
│   └── package.json
├── posts
│   ├── Dockerfile
│   ├── index.js
│   ├── package-lock.json
│   ├── package.json
│   └── README.md
├── query
│   ├── Dockerfile
│   ├── index.js
│   ├── package-lock.json
│   └── package.json
└── README.md


---

## 🚀 What You’ll Learn

- How to deploy a simple microservice (`posts`) on Kubernetes
- How to expose it using a **ClusterIP** service
- How to route traffic using **NGINX Ingress Controller**
- How to test the setup locally

---

## ⚙️ Prerequisites

- Kubernetes cluster (Minikube, Kind, GKE, EKS, etc.)
- `kubectl` installed and configured
- Docker (to build and push your image)

---

## 📚 Related Concepts
Kubernetes Deployment

Service (ClusterIP)

Ingress & Ingress Controller

DNS & Host Routing

Docker image versioning


## 🙌 Author
Built with ❤️ for learning and experimentation.