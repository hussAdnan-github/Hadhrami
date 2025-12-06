import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/home/page'));
const OurStoryPage = lazy(() => import('../pages/our-story/page'));
const ProductsPage = lazy(() => import('../pages/products/page'));
const ProductDetailPage = lazy(() => import('../pages/product-detail/page'));
const BlogPage = lazy(() => import('../pages/blog/page'));
const BlogPostPage = lazy(() => import('../pages/blog-post/page'));
const ContactPage = lazy(() => import('../pages/contact/page'));
const InitiativesPage = lazy(() => import('../pages/initiatives/page'));
const InitiativeDetailPage = lazy(() => import('../pages/initiative-detail/page'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  }, 
  {
    path: '/our-story',
    element: <OurStoryPage />,
  },
  {
    path: '/products',
    element: <ProductsPage />,
  },
  {
    path: '/products/:id',
    element: <ProductDetailPage />,
  },
  {
    path: '/blog',
    element: <BlogPage />,
  },
  {
    path: '/blog/:id',
    element: <BlogPostPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/initiatives',
    element: <InitiativesPage />,
  },
  {
    path: '/initiatives/:id',
    element: <InitiativeDetailPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export default routes;
