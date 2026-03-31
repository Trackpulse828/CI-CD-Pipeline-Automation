#  Problem 1 — CI/CD Pipeline Automation

---

##  Pipeline Overview

This project demonstrates an automated CI/CD pipeline using modern DevOps tools.

---

##  Tools Used
- Jenkins  
- Docker  
- GitHub Actions  

---

##  Pipeline Flow
- Code pushed to GitHub 
- GitHub Actions → Runs tests & builds Docker images
- Jenkins → Pulls code & deploys using Docker Compose

##  GitHub Actions
- Runs on every push to main
-  Install → Test → Build Docker images
-  Full integration test with docker compose

##  Jenkins
- Pipeline defined in Jenkinsfile
- Stages: Checkout → Install & Test → Build → Deplo
- Access: https://ci-cd-kj2r.onrender.com

##  CI/CD Links
- GitHub Actions:https://github.com/Trackpulse828/CI-CD-Pipeline-Automation.git 
- Jenkinsfile: ./Jenkinsfile


