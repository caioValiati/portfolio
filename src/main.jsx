import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/index.css'
import { App } from '.'
import { HomePage } from './pages/home/homePage'
import { AboutPage } from './pages/about/AboutPage'
import { ProjectsPage } from './pages/projects/ProjectsPage'
import { ContactPage } from './pages/contact/ContactPage'
import { ResumePage } from './pages/resume/resumePage'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

if (!localStorage.getItem('lang')) {   
  localStorage.setItem('lang', 'br')
}

if (!localStorage.getItem('theme')) {   
  localStorage.setItem('theme', 'dark')
}



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "about",
        element: <AboutPage />
      },
      {
        path: "projects",
        element: <ProjectsPage />
      },
      {
        path: "resume",
        element: <ResumePage />
      },
      {
        path: "contact",
        element: <ContactPage />
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

