import {Navbar} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'

export const Header = () => {
    return (
        <header>
            <h1 id='title' className="text-center bg-primary mb-0 py-5">Nihongo Assistant</h1>
            <Navbar bg="secondary" expand="lg" >
            <Navbar.Brand className="text-light" href="#home">Nihongo Assistant</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"  />
            <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="mr-auto">
                <Nav.Link href="#home" className="text-light">Hiragana</Nav.Link>
                <Nav.Link href="#home" className="text-light">Katakana</Nav.Link>
                <Nav.Link href="#home" className="text-light">Kanji</Nav.Link>
                <Nav.Link href="#link" className="text-light">About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </header>
    )
}
