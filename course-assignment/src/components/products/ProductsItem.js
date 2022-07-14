import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ProductsItem({ id, title, price }) {
 return (
  <Link to={`detail/${id}`}>
   <h5>{title}</h5>
   <p>{price}</p>
  </Link>
 );
}

ProductsItem.propTypes = {
 id: PropTypes.number.isRequired,
 title: PropTypes.string.isRequired,
 price: PropTypes.number.isRequired,
};

export default ProductsItem;