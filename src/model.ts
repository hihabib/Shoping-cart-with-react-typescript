

export type CartAction = (id:string) => void;
export interface CartItems {
    [productId:string]: number
}
export interface ICartContext {
    cartItems: CartItems,
    incrementItem: CartAction,
    decrementItem: CartAction,
    removeItem: CartAction,
    showOffCanvas: boolean,
    toggleShowCanvas: () => void
}