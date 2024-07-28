import { Home, Profile, SignIn, SignUp } from '@/pages'
import EcommerceSection12 from './components/product'
import Product from './pages/Products'
import Admin from './pages/Admin'
import User from './pages/User'
import ProductDetail from './pages/Products/ProductDetail'
import ShopingCart from './pages/Products/ShoppingCart'
import Invoice from './pages/Invoice'

export const routes = [
  {
    name: 'home',
    path: '/home',
    element: <Home />
  },
  {
    name: 'profile',
    path: '/profile',
    element: <Profile />
  },
  {
    name: 'Sign In',
    path: '/sign-in',
    element: <SignIn />
  },
  {
    name: 'Sign Up',
    path: '/sign-up',
    element: <SignUp />
  },
  {
    name: 'Product',
    path: '/product',
    element: <Product />
  },
  {
    name: 'Ecommerce Section 12',
    path: '/detail/:id',
    element: <ProductDetail />
  },
  {
    name: 'Admin',
    path: '/admin',
    element: <Admin />
  },
  {
    name: 'Admin',
    path: '/admin/user',
    element: <User />
  },
  {
    name: 'Admin',
    path: '/cart',
    element: <ShopingCart />
  },
  {
    path: '/bill/:id',
    element: <Invoice />
  }
]

export default routes
