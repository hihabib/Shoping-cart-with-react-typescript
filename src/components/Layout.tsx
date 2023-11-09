import NavbarTop from "./NavbarTop.tsx";
import {Outlet} from "react-router-dom";
import {Container} from "react-bootstrap";

const Layout = () => {
    return (
        <>
            <header className={'sticky-top'}>
                <NavbarTop/>
            </header>
            <main className={'py-5'}>
                <Container>
                    <Outlet/>
                </Container>
            </main>
        </>
    );
};

export default Layout;