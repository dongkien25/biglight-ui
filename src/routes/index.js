import Home from "~/pages/Home"
import About from "~/pages/About"

//Public pages
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
]

//Authen routes
const privateRoutes = []

export { publicRoutes, privateRoutes }
