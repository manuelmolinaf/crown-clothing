import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import CartDropDownMenu from "../cart-drop-down-menu/cart-drop-down-menu";
import Badge from 'react-bootstrap/Badge';
import Dropdown from 'react-bootstrap/Dropdown';

const CartIcon = () => {
  return (
    <Dropdown className="d-flex align-items-center justify-content-center" align='end'>
      <Dropdown.Toggle variant="transparent" className="p-0" id="dropdown-basic">
        <span className="position-relative">
          <FontAwesomeIcon className="text-white fs-3" icon={faBagShopping} />
          <Badge
            pill
            bg="danger"
            className="position-absolute top-0 start-100 translate-middle"
            style={{ marginTop: "15px" }}
          >
            3
          </Badge>
        </span>
      </Dropdown.Toggle>

      <Dropdown.Menu className="p-0">
        <CartDropDownMenu/>
      </Dropdown.Menu>
    </Dropdown>
    
  );
};

export default CartIcon;
