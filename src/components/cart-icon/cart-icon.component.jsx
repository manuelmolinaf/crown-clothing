import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import CartDropdownMenu from "../cart-dropdown-menu/cart-dropdown-menu";
import Badge from 'react-bootstrap/Badge';
import Dropdown from 'react-bootstrap/Dropdown';
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
const CartIcon = () => {

  const { cartCount } = useContext(CartContext);

  return (
    <Dropdown className="d-flex align-items-center" align='end' autoClose={false}>
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
        <CartDropdownMenu />
      </Dropdown.Menu>
    </Dropdown>

  );
};

export default CartIcon;
