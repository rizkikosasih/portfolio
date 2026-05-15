import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'

// Import Layout & Pages
import { HomeLayout } from '@/components/layout'
import NotFound from '@/components/NotFound'
import { ThemeProvider } from '@/components/theme-provider'

import '@/styles/index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
