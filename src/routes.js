import TodoPage from './pages/TodoPage.jsx'
import TestPage from './pages/TestPage.jsx'

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
  }
]

export default routes