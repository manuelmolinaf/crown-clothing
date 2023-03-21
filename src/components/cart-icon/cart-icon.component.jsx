import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import CartDropdownMenu from "../cart-dropdown-menu/cart-dropdown-menu";
import Badge from 'react-bootstrap/Badge';
import Dropdown from 'react-bootstrap/Dropdown';
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
const CartIcon = () => {

  const { cartCount } = useContext(CartContext);
  
  const handleClose = () => {
    // Do something to close the dropdown
    // For example, you can use state to toggle the visibility of the dropdown
  };

  return (
    <Dropdown className="d-flex align-items-center" align='end' autoClose={false} onClose={handleClose}>
      <Dropdown.Toggle variant="transparent" className="p-0" id="dropdown-basic">
        <span className="position-relative">
          <FontAwesomeIcon className="text-white fs-2" icon={faBagShopping} />
          <Badge
            pill
            bg="danger"
            className="position-absolute top-0 start-100 translate-middle"
            style={{ marginTop: "15px" }}
          >
            {cartCount}
          </Badge>
        </span>
      </Dropdown.Toggle>

      <Dropdown.Menu className="p-0">
        <CartDropdownMenu onClose={handleClose} />
      </Dropdown.Menu>
    </Dropdown>

  );
};

export default CartIcon;
