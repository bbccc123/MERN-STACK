import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = ({ product }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(price);
  };
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' className='img-fluid' />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div' className='product-link'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} đánh giá`}
          />
        </Card.Text>

        <Card.Text
          as='h4'
          style={{ color: '#3498db', fontWeight: '700', marginTop: '20px' }}
        >
          <del>{formatPrice(product.price)}</del>
        </Card.Text>
        <Card.Text as='h4' style={{ color: '#000', fontWeight: '700' }}>
          {formatPrice(product.discount_price)}{' '}
          <span className='discount-percentage'>
            (-
            {Math.round(
              ((product.price - product.discount_price) / product.price) * 100
            )}
            %)
          </span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
