import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { FaPaypal } from 'react-icons/fa';
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import Message from '../components/Message';
import { addToCart, removeFromCart } from '../slices/cartSlice';

const CartScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const addToCartHandler = (product, qty) => {
    dispatch(addToCart({ ...product, qty }));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    navigate('/login?redirect=/shipping');
  };
  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(price);
  };

  return (
    <Row>
      <Col md={8}>
        <h1 style={{ marginBottom: '20px' }}>Giỏ hàng</h1>
        <Link
          to='/'
          className='btn my-3 rounded back-button'
          style={{ border: '1px solid #3498db', color: '#3498db' }}
        >
          <AiOutlineArrowLeft className='mr-1' /> Quay lại
        </Link>
        {cartItems.length === 0 ? (
          <Message>Giỏ hàng của bạn hiện đang trống! </Message>
        ) : (
          <ListGroup
            className='rounded'
            style={{ border: '2px solid #3498db' }}
            variant='flush'
          >
            {cartItems.map((item) => (
              <ListGroup.Item key={item._id}>
                <Row>
                  <Col md={2}>
                    <Link to={`/product/${item._id}`}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Link>
                  </Col>
                  <Col md={3} className='text-center d-flex align-items-center'>
                    <strong>{item.name}</strong>
                  </Col>
                  <Col md={3} className='text-center d-flex align-items-center'>
                    <strong>{formatPrice(item.discount_price)}</strong>
                  </Col>
                  <Col md={2} className='text-center d-flex align-items-center'>
                    <Form.Control
                      as='select'
                      value={item.qty}
                      onChange={(e) =>
                        addToCartHandler(item, Number(e.target.value))
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          x {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2} className='text-center d-flex align-items-center'>
                    <Button
                      type='button'
                      variant='light'
                      onClick={() => removeFromCartHandler(item._id)}
                    >
                      <FaTrash />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2 style={{ color: '#000' }}>
                Tổng ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) mặt
                hàng
              </h2>
              <strong>
                {formatPrice(
                  cartItems.reduce(
                    (acc, item) => acc + item.qty * item.discount_price,
                    0
                  )
                )}
              </strong>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type='button'
                className='btn-block custom-button'
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                <FaPaypal className='cart-icon' />{' '}
                <strong style={{ fontSize: '21px' }}>
                  Tiếp tục thanh toán
                </strong>
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default CartScreen;
