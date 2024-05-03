
import searchIcon from '../assets/searchIcon.svg';
import './Header.css'; 

const Header = () => {

  return (
    <header className="header">
      <div className="container">
        <nav className="navigation">
          <ul>
            <li>
              <a href="#">Skin Care</a>
            </li>
            <li>
              <a href="#">Body & Hand</a>
            </li>
            <li>
              <a href="#">Hair</a>
            </li>
            <li>
              <a href="#">Fragrance</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Kits & Travel</a>
            </li>
            <li>
              <a href="#">Gifts</a>
            </li>
            <li>
              <a href="#">Read</a>
            </li>
            <li>
              <a href="#">Stores</a>
            </li>
            <li>
              <a href="#">Facial Appointments</a>
            </li>
          
          </ul>
        </nav>
        <nav className="navigation-small">
          <div>
            <div className="shop-dropdown">
              Shop
              <ul className="dropdown-content">
                <li><a href="#">Skin Care</a></li>
                <li><a href="#">Body & Hand</a></li>
                <li><a href="#">Hair</a></li>
                <li><a href="#">Fragrance</a></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">Kits & Travel</a></li>
                <li><a href="#">Gifts</a></li>
              </ul>
            </div>
           
            <div>
              <a href="#">Read</a>
            </div>
            <div>
              <a href="#">Stores</a>
            </div>
          
          </div>
        </nav>
            
              <div className="search-button">
              <img src={searchIcon} alt="Search Icon" /> 
              {/* <input type="text" placeholder="Search" className="search-input" /> */}
              </div>
           
  
        <div className="login-cart">
          <ul>
            <li>
              <a href="/login">Log in</a>
            </li>
            <li>
              <a href="/cabinet">Cabinet</a>
            </li>
            <li className="cart-icon">
              <a href="/cart">
                Cart
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
