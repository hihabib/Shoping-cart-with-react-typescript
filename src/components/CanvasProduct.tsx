import {CartProduct} from "../data.ts";
import {CloseButton, Stack} from "react-bootstrap";

import {currencyFormat} from "../utils/utils.ts";
import useCart from "../hooks/useCart.ts";

const CanvasProduct = ({product}:{product:CartProduct}) => {
    const {removeItem} = useCart();
    return (
        <div>
            <Stack direction={'horizontal'} className={'justify-content-between align-items-start'}>
                <Stack className={'me-auto'} direction={'horizontal'} gap={3}>
                    <img style={{height: 100, width: 100}} src={product.image} alt={product.title} className={'img-fluid'}/>
                    <div>
                        <h5>{product.title}</h5>
                        <h6 className={'text-muted'}>{currencyFormat(product.price)} &times; {product.quantity}</h6>
                    </div>
                </Stack>
                <div className={'pt-2'}><CloseButton onClick={() => removeItem(product.id)}/></div>
            </Stack>
        </div>
    );
};

export default CanvasProduct;