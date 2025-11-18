import { createBrowserRouter } from 'react-router-dom'
import { HomePage, DetailsPage, AnalyticsPage } from '../pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/details',
    element: <DetailsPage />,
  },
  {
    path: '/analytics',
    element: <AnalyticsPage />,
  },
])
