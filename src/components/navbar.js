import { Navbar, Container , Nav, Row, Col} from "react-bootstrap"
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa"
import { SiMicrosoftoutlook } from "react-icons/si"

import "../styles/navbar.css"


const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand href="/" style={{ fontFamily:"Indie Flower", fontSize: "1.8em" }}>Mi pagina Personal</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Formacion academica</Nav.Link>
                        <Nav.Link href="#pricing">Hobbies</Nav.Link>
                        <Nav.Link href="#pricing">Acerca de: Criptografia</Nav.Link>
                    </Nav>
                    <Navbar.Text style={{ margin: "0 12px", fontFamily: "Indie Flower", fontSize: "1.5em" }}>
                        Redes sociales 
                    </Navbar.Text>
                    <Row>
                        <Col xs={6} md={3} className="colStyle" ><a href="https://www.facebook.com/rodrigo.elpelos18/" target="_blank" rel="noreferrer"><FaFacebookSquare className="navIcon" /></a> </Col>
                        <Col xs={6} md={3} className="colStyle"><a href="https://api.whatsapp.com/send?phone=5574780847" target="_blank" rel="noreferrer"><FaWhatsapp className="navIcon" /></a> </Col>
                        <Col xs={6} md={3} className="colStyle"><a href="https://www.instagram.com/rodrigo_elpelos/?hl=es" target="_blank" rel="noreferrer"><FaInstagram className="navIcon" /></a> </Col>
                        <Col xs={6} md={3} className="colStyle"><a href="mailto:rodrigo.alvarez18@outlook.com" target="_blank" rel="noreferrer"><SiMicrosoftoutlook className="navIcon" /></a> </Col>
                    </Row>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar