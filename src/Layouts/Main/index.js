import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import Heder from "./Header";
import Footer from "./Footer";

const MainLayout = () => {
    return (<div className="main">
        <Heder/>
        <Container>

        <Outlet />
        </Container>
     
        <Footer/>
    </div>)
};
export default MainLayout;