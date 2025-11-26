# ✨ Student Management System — React

A clean and simple **Student Management System** built using **React**, **JavaScript**, **CSS**, and **LocalStorage**.  
Manage **Students**, **Sections**, and **Exam Results** through a lightweight, frontend-only interface.

---

## 🌿 Features

- Add / Edit / Delete **Students**
- Create & manage **Sections**
- Record **Exam Results** (subject, marks, date)
- Automatic **grade calculation**
- Fully **responsive UI**
- Data saved permanently using **LocalStorage**
- Minimal UI with a clean background image

---

## 🛠 Tech Stack

- **React (JSX + JavaScript)**
- **React Hooks** — `useState`, `useEffect`
- **LocalStorage API** (acts as local database)
- **CSS** (no frameworks)

---

## 🧩 Modules Overview

### 👤 Students  
- Name  
- Email  
- Section  
- Enrollment Date  

### 🏫 Sections  
- Name  
- Description  
- Auto student count  

### 📊 Results  
- Student  
- Subject  
- Marks  
- Exam Date  
- Auto grade badge (A+, A, B, C, D, F)

---

## 🗃 Data Storage (LocalStorage API)

| Key | Stores |
|-----|--------|
| `srms_students` | List of students |
| `srms_sections` | All sections |
| `srms_results` | Exam results |

No backend is used — everything persists locally in the browser.

---

## 📂 Folder Structure

Project/
│── public/
│ └── pic.jpg ← background image
│
│── src/
│ ├── App.js
│ ├── index.js
│ ├── index.css
│ ├── components/
│ │ ├── StudentForm.js
│ │ ├── SectionForm.js
│ │ ├── ResultForm.js
│ │ └── Modal.js
│ └── utils/
│ └── useLocal.js
└── README.md


---

## 🚀 Run Locally

```bash
git clone https://github.com/Harshita-singhh/Frontend-Dev.git
cd Frontend-Dev/Student_Management_System/Project
npm install
npm start

Runs on:
👉 http://localhost:3000/

🌈 UI / Design
Clean white card-based layout
Smooth modal forms
Soft background image
No external UI libraries
Simple, student-friendly look

🌻 Future Enhancements
Search & filters
Sorting (marks, date, name)
Backend integration (Node + MongoDB)
Login system
Export to PDF / CSV
Dark mode

👩‍💻 Author
Harshita
