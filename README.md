# Angular TypeScript To-Do List App

## Overview

This project is a simple **To-Do List application built with Angular and TypeScript**. The application allows users to add, view, complete, and remove tasks through a clean web interface.

The goal of this project is to practice:

* Angular component architecture
* TypeScript interfaces and typing
* Basic state management in Angular
* Event handling and data binding
* Working with the Angular CLI

This project is intended as a **learning exercise for developers exploring Angular and TypeScript**.

---

## Features

* Add new tasks
* Mark tasks as completed
* Delete tasks
* Display a list of tasks
* Simple and responsive interface

---

## Technologies Used

* Angular
* TypeScript
* HTML
* CSS
* Angular CLI
* Node.js

---

## Project Structure

```
todo-app/
│
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   └── todo/
│   │   │       ├── todo.component.ts
│   │   │       ├── todo.component.html
│   │   │       └── todo.component.css
│   │   │
│   │   ├── models/
│   │   │   └── task.ts
│   │   │
│   │   ├── services/
│   │   │   └── task.service.ts
│   │   │
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   └── app-routing.module.ts
│   │
│   └── index.html
│
├── package.json
└── README.md
```

---

## Installation

### 1. Install Node.js

Download and install Node.js from:

https://nodejs.org

Verify installation:

```
node -v
npm -v
```

---

### 2. Install Angular CLI

```
npm install -g @angular/cli
```

Verify installation:

```
ng version
```

---

### 3. Clone the Repository

```
git clone https://github.com/yourusername/angular-todo-app.git
```

Navigate into the project:

```
cd angular-todo-app
```

---

### 4. Install Dependencies

```
npm install
```

---

### 5. Run the Development Server

```
ng serve
```

Open your browser and navigate to:

```
http://localhost:4200
```

---

## Example Task Model

Example TypeScript interface used for tasks:

```
export interface Task {
  id: number;
  title: string;
  completed: boolean;
}
```

---

## Future Improvements

Possible enhancements for the project:

* Persistent storage using Local Storage
* Backend API integration
* Task editing
* Task categories or tags
* Due dates
* Authentication for multiple users

---

## Learning Goals

This project helps reinforce:

* Angular component structure
* TypeScript interfaces and type safety
* Event binding and two-way data binding
* Basic Angular services
* Angular CLI workflow

---

## License

This project is for educational purposes and is free to use or modify.
