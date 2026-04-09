import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app.tsx'

import { createHashRouter, RouterProvider } from 'react-router'
import { ExamScheduler } from './pages/exam-scheduler.tsx'
import { MyBookList } from './pages/my-book-list.tsx'
import { MovieCatalog } from './pages/movie-catalog.tsx'
import { PromptForge } from './pages/prompt-forge.tsx'
import { RootLayout } from './components/layout.tsx'

const router = createHashRouter([
  {
    Component: RootLayout,
    children: [
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
      {
        path: '/movie-catalog',
        Component: MovieCatalog,
      },
      {
        path: '/prompt-forge',
        Component: PromptForge,
      },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
