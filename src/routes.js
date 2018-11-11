import TodoPage from './components/pages/TodoPage.jsx'
import TestPage from './components/pages/TestPage.jsx'
import SwimmersPage from './components/pages/SwimmersPage.jsx'

const routes = [
  {
    path: '/',
    name: 'home',
    exact: true
  },
  {
    path: '/todo',
    name: 'todo',
    component: TodoPage
  },
  {
    path: '/test',
    name: 'test',
    component: TestPage
  },
  {
    path: '/swimmers',
    name: 'swimmers',
    component: SwimmersPage
  }
]

export default routes