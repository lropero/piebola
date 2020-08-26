import { Players } from 'piebola/components'

const routes = [
  {
    path: '/',
    redirect: '/players'
  },
  {
    path: '/players',
    component: Players
  }
]

export default routes
