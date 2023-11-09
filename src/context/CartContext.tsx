import {createContext, ReactNode, useState} from "react";
import {CartAction, ICartContext, CartItems} from "../model.ts";

export const CartContext = createContext<ICartContext>({} as ICartContext);

interface CartProviderProps {
    children: ReactNode
}
const CartProvider = ({children}: CartProviderProps) => {
    const [cart, setCart] = useState<CartItems>({} as CartItems);
    const [showOffCanvas, setShowOffCanvas] = useState<boolean>(false);
    const incrementItem:CartAction= (id:string):void => {
        setCart(currCart => {
            let currCartClone = {...currCart};
            if(!currCartClone[id]){
                currCartClone = {...currCartClone, [id]:1};
            } else{
                currCartClone = {...currCartClone, [id]:currCartClone[id]+1};
            }
            return currCartClone;
        });
    }
    const removeItem:CartAction = (id:string) => {
        setCart((currCart:CartItems) => {
            const currCartClone = {...currCart};
            delete currCartClone[id];
            return currCartClone as CartItems;
        })
    }
    const decrementItem:CartAction= (id:string):void => {
            setCart(currCart => {
                let currCartClone = {...currCart};
                if(currCartClone[id] <= 0){
                    currCartClone = {...currCartClone, [id]:0};
                } else{
                    currCartClone = {...currCartClone, [id]:currCartClone[id]-1};
                }
                return currCartClone;
            });
        }
    const toggleShowCanvas = () => {
        setShowOffCanvas(!showOffCanvas);
    }
    const values:ICartContext = {
        incrementItem,
        decrementItem,
        removeItem,
        cartItems: cart,
        showOffCanvas,
        toggleShowCanvas
    }
    return (<CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>);
};

export default CartProvider;