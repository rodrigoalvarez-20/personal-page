import { Navbar, Container , Nav, Row, Col} from "react-bootstrap"
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa"
import { SiMicrosoftoutlook } from "react-icons/si"

import "../styles/navbar.css"


const nav_links = [
    {
        "ref": "#academica",
        "name": "Formación academica"
    },
    {
        "ref": "#hobbies",
        "name": "Hobbies"
    },
    {
        "ref": "#crypto",
        "name": "Acerca de: Criptografía"
    },
    {
        "ref": `${process.env.PUBLIC_URL}/CV.pdf`,
        "name": "Mi CV",
        "target": "_blank"
    },
    {
        "ref": `${process.env.PUBLIC_URL}/public.pem`,
        "name": "Mi llave pública",
        "download": true,
        "download_name": "APR_Key.pem"
    }
]

const social = [
    {
        "ref": "https://www.facebook.com/rodrigo.elpelos18/",
        "icon": <FaFacebookSquare className="navIcon" />
    },
    {
        "ref": "https://api.whatsapp.com/send?phone=5574780847",
        "icon": <FaWhatsapp className="navIcon" />
    },
    {
        "ref": "https://www.instagram.com/rodrigo_elpelos/?hl=es",
        "icon": <FaInstagram className="navIcon" />
    },
    {
        "ref": "mailto:rodrigo.alvarez18@outlook.com",
        "icon": <SiMicrosoftoutlook className="navIcon" />
    }
]

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand href="/" style={{ fontFamily:"Indie Flower", fontSize: "1.8em" }}>Mi pagina Personal</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {
                            nav_links.map(item => <Nav.Link href={item.ref} download={ item.download_name } target={ item.target } >{item.name}</Nav.Link> )
                        }
                    </Nav>
                    <Navbar.Text style={{ margin: "0 12px", fontFamily: "Indie Flower", fontSize: "1.5em" }}>
                        Redes sociales 
                    </Navbar.Text>
                    <Row>
                        {
                            social.map(item => <Col xs={6} md={3} className="colStyle" ><a href={item.ref} target="_blank" rel="noreferrer">{item.icon}</a> </Col>)
                        }
                    </Row>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar