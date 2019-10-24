import CompanyData from '../pages/CompanyData.vue'
import CompanyPage from '../pages/CompanyPage.vue'
import CompanyTable from '../pages/CompanyTable.vue'

const routes = [
  {
    path: '*',
    component: CompanyData
  },
  {
    path: '/CompanyData',
    component: CompanyData
  },
  {
    path: '/CompanyPage',
    component: CompanyPage
  },
  {
    path: '/CompanyTable',
    component: CompanyTable
  },
]

export default routes