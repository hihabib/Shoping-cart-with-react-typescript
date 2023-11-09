import {Button, Container, Nav, Navbar, NavLink as NavLinkBs} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {CartItems} from "../model.ts";
import CartCanvas from "./CartCanvas.tsx";
import useCart from "../hooks/useCart.ts";

const NavbarTop = () => {
    const {cartItems, toggleShowCanvas} = useCart();
    const totalCartProduct = (cartItems: CartItems) :number => {
        return Object.values(cartItems).reduce((current, next) => {
            current += next;
            return current;
        }, 0)
    }
    return (
            <Navbar className={'shadow-sm bg-white py-3'}>
                <Container>
                    <Nav className={'me-auto'}>
                        <NavLinkBs to={"/"} as={NavLink}>Home</NavLinkBs>
                        <NavLinkBs to={"/store"} as={NavLink}>Store</NavLinkBs>
                        <NavLinkBs to={"/about"} as={NavLink}>About</NavLinkBs>
                    </Nav>
                    <div>
                        <CartCanvas/>
                        <Button onClick={toggleShowCanvas} variant={'outline-primary'} className={'rounded-circle d-flex justify-content-center align-items-center cart-button'}>
                            <i className="bi bi-cart4"></i>
                        </Button>
                    <span className={'rounded-circle bg-danger text-white d-block position-absolute d-flex justify-content-center align-items-center'} style={{height:'1.5rem', width: '1.5rem', transform: 'translate(25px, -15px)'}}>{totalCartProduct(cartItems)}</span>
                    </div>
                </Container>
            </Navbar>
    );
};

export default NavbarTop;