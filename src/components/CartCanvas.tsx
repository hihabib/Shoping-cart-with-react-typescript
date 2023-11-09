import {Offcanvas, OffcanvasBody, OffcanvasHeader, Stack} from "react-bootstrap";

import {CartProduct, storeProducts} from "../data.ts";
import CanvasProduct from "./CanvasProduct.tsx";
import {currencyFormat} from "../utils/utils.ts";
import useCart from "../hooks/useCart.ts";

const CartCanvas = () => {
    const {toggleShowCanvas, showOffCanvas, cartItems} = useCart();
    const selectedCartItems = Object.keys(cartItems).reduce((curr, next) => {
        const searchedProduct = storeProducts.find(product => product.id === next) as CartProduct;
        if (searchedProduct) {
            searchedProduct['quantity'] = cartItems[next];
            curr.push(searchedProduct);
        }
        return curr;
    }, [] as CartProduct[])
    const totalPrice  = selectedCartItems.reduce((curr, next) => curr + next.price, 0);
    return (<Offcanvas onHide={toggleShowCanvas} show={showOffCanvas} placement={'end'}>
            <OffcanvasHeader>
                <h4>Your cart</h4>
            </OffcanvasHeader>
            <OffcanvasBody>
                <Stack gap={4}>
                    {selectedCartItems.map(product => (<CanvasProduct product={product} key={product.id}/>))}
                </Stack>
                {totalPrice ? <h3 className={'mt-4 text-end'}>Total: {currencyFormat(totalPrice)}</h3> : <h4 className={'mt-4 text-center'}>No product is added in the cart.</h4>}
            </OffcanvasBody>
        </Offcanvas>);
};

export default CartCanvas;