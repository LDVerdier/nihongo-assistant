import {Navbar} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export const Header = () => {
    return (
        <header>
            <h1 id='title' className="text-center bg-primary mb-0 py-5">Nihongo Assistant</h1>
            <Navbar bg="secondary" expand="md" >
                <Nav.Link><Link to="/" className="text-light">Accueil</Link></Nav.Link>
                {/* <Navbar.Brand className="text-light" href="#home">Nihongo Assistant</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav"  />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="mr-auto">
                        <Nav.Link><Link to="/hiragana" className="text-light">Hiragana</Link></Nav.Link>
                        <Nav.Link><Link to="/katakana" className="text-light">Katakana</Link></Nav.Link>
                        <Nav.Link><Link to="/kanji" className="text-light">Kanji</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}
