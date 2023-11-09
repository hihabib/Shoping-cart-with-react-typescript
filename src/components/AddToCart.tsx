import {Button, Stack} from "react-bootstrap";
import useCart from "../hooks/useCart.ts";
interface AddToCartProps {
    id: string
}
const AddToCart = ({id}:AddToCartProps) => {
    const {incrementItem, decrementItem, removeItem,cartItems} = useCart();
    return (<div>
            {!cartItems[id] ? <Button onClick={() => incrementItem(id)} variant={'primary'} className={'w-100'}>+ Add to cart</Button> : <Stack gap={3}>
                <Stack className={'justify-content-center align-items-center'} direction={'horizontal'} gap={3}>
                    <Button onClick={() => decrementItem(id)} variant={'primary'} size={'sm'}>-</Button>
                    <div><span style={{fontSize: '20px'}}>{cartItems[id] ? cartItems[id] : 0}</span> in cart</div>
                    <Button onClick={() => incrementItem(id)} variant={'primary'} size={'sm'}>+</Button>
                </Stack>
                <div className={'mx-auto'}>
                    <Button onClick={() => removeItem(id)} variant={'danger'} size={'sm'}>remove</Button>
                </div>
            </Stack>

            }
        </div>);
};

export default AddToCart;