import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function NavBar() {
    const cartProducts = useSelector((state) => state.cart)
    return (
        <>
            <Navbar bg="light" variant="light" fixed='top'>
                <Container>
                    <Link to="/" className='navbar-brand'>Cart App</Link>
                    <Nav className="ms-auto">
                        <Link to="/" className='nav-link'>Products</Link>
                        <Link to="/cart" className='nav-link'>{cartProducts.length > 0 ? "Cart - " + cartProducts.length : "Cart"}</Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar