import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router'
import { ExamScheduler } from './pages/exam-scheduler.tsx'
import { MyBookList } from './pages/my-book-list.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    errorElement: <div>Oops! Something went wrong.</div>,
  },
  {
    path: '/exam-scheduler',
    Component: ExamScheduler,
  },
  {
    path: '/my-book-list',
    Component: MyBookList,
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
