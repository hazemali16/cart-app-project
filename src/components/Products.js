import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../rtk/slices/products-slice';
import { addToCart } from '../rtk/slices/cart-slice';

function Products() {
    const products = useSelector((state) => state.products)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts())
    },[dispatch])
    return (
        <Container className='mt-5 pt-5'>
            <Row>
                { products.length > 0 ?  products.map((product) => {
                    return (
                    <Col key={product.id} className="mb-4" sm={12} lg={3}>
                        <Card style={{ width: '100%' }}>
                            <Card.Img style={{ height: "250px" }} variant="top" src={product.image} />
                            <Card.Body>
                                <Card.Title>{product.title.slice(0, 20)}...</Card.Title>
                                <Card.Text>
                                    {product.description.slice(0, 85)}...
                                </Card.Text>
                                <Card.Text>
                                    {product.price}$
                                </Card.Text>
                                <Button variant="primary" onClick={() => {dispatch(addToCart(product))}}>Add To Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    );
                }) : <h1>Loading...</h1> }
            </Row>
        </Container>
    )
}
export default Products