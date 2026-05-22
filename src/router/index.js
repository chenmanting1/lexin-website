import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Product from '../pages/Product.vue'
import ProductDetail from '../pages/ProductDetail.vue'
import News from '../pages/News.vue'
import Honor from '../pages/Honor.vue'
import Contact from '../pages/Contact.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About },
  { path: '/product', name: 'product', component: Product },
  { path: '/product/:id', name: 'product-detail', component: ProductDetail },
  { path: '/news', name: 'news', component: News },
  { path: '/honor', name: 'honor', component: Honor },
  { path: '/contact', name: 'contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
