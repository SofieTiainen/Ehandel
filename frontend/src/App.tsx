import './assets/css/App.css';
import './assets/css/index.css'

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import Root from './routes/Root';
import Home from './routes/Home';
import SpecificProduct from './routes/SpecificProduct';
import Cart from './routes/Cart';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/HollyJollyHaven' element={<Root />} >
      <Route index element={<Home />} />
      <Route path='/HollyJollyHaven/product/:id' element={<SpecificProduct />} />
      <Route/>
      <Route path='/HollyJollyHaven/cart' element={<Cart />} />
    </Route>
  )
)

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
