import { Button, Container, Table, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clearAll, removeFromCart } from "../rtk/slices/cart-slice";

function Cart() {
    const productsCart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    let price = 0;
    return (
        <Container className="my-5 py-5">
            <h1 className="mb-4">Welcome To Cart</h1>
            <Button
                variant="primary"
                className="mb-4"
                onClick={() => {
                    dispatch(clearAll());
                }}
            >
                Clear All
            </Button>
            <div style={{ overflowX: "auto" }}>
            <Table striped bordered hover size="sm" style={{ minWidth: "1250px", marginBottom: "0", verticalAlign: "center" }}>
                <thead>
                    <tr>
                        <th className="text-center">Id</th>
                        <th>Title</th>
                        <th className="text-center">Counter</th>
                        <th>Img</th>
                        <th className="text-center">Price</th>
                        <th className="text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {productsCart.map((product) => {
                        price += product.price * product.counter;
                        return (
                            <tr key={product.id}>
                                <td
                                    className="d-flex justify-content-center align-items-center"
                                    style={{ height: "115px" }}
                                >
                                    {product.id}
                                </td>
                                <td>{product.title}</td>
                                <td
                                    className="d-flex justify-content-center align-items-center fs-5"
                                    style={{ height: "115px" }}
                                >
                                    {product.counter}
                                </td>
                                <td>
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        style={{ width: "100px", height: "100px" }}
                                    ></Image>
                                </td>
                                <td
                                    className="d-flex justify-content-center align-items-center fw-bold"
                                    style={{ height: "115px" }}
                                >
                                    {product.price}$
                                </td>
                                <td className="position-relative">
                                    <Button
                                        className="position-absolute top-50 start-50 translate-middle"
                                        variant="danger"
                                        onClick={() => {
                                            dispatch(removeFromCart(product));
                                        }}
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
            </div>
            <h5>Total Price: {price.toFixed(2)}$</h5>
        </Container>
    );
}
export default Cart;
