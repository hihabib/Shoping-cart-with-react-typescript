import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import {routes} from "./routes/routes.tsx";
import './main.scss'
// import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap-icons/font/bootstrap-icons.scss'
import CartContext from "./context/CartContext.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <CartContext>
        <RouterProvider router={routes}/>
    </CartContext>
)
