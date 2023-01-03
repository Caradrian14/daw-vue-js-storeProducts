import { createRouter, createWebHistory } from 'vue-router'
import tableBody from './components/tableBody.vue';
import productForm from './components/productForm.vue';
import categoryForm from './components/categoryForm.vue';
import categoryTable from './components/tableCategory.vue';
import aboutUs from './components/aboutUs.vue';
const routes = [
  {
    path: '/',
    name: 'Productos',
    component: tableBody
  },
  {
    path: '/new-product',
    name: 'New-Product',
    component: productForm
  },
  {
    path: '/new-category',
    name: 'New-Category',
    component: categoryForm
  },
  {
    path: '/table-category',
    name: 'Table-Category',
    component: categoryTable
  },
  {
    path: '/edit-product/:id',
    name: 'EditProduct',
    component: productForm,
    props: true
  },
  {
    path: '/about',
    name: 'About',
    component: aboutUs
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router