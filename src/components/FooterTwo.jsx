import './FooterTwo.css';

const FooterTwo = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
        <section className="footer-section">
          <h3>Subscribe to Aesop communications</h3>
          <hr />
          <form>
            <input type="email" placeholder="Email address" />
          </form>
          
          <p><input type="checkbox" name="subscribe" id="subscribe" />Subscribe to receive communications from Aesop. By subscribing, you confirm you have read and understood our <a href="/privacy-policy">privacy policy</a>.</p>
        </section>
        <section className="footer-section">
          <h3>Orders and support</h3>
          <hr />
          <ul>
            <li><a href="/contact-us">Contact us</a></li>
            <li><a href="/faqs">FAQs</a></li>
            <li><a href="/shipping">Shipping</a></li>
            <li><a href="/returns">Returns</a></li>
            <li><a href="/order-history">Order history</a></li>
            <li><a href="/gift-card-balance">Check gift card balance</a></li>
            <li><a href="/terms-and-conditions">Terms and conditions</a></li>
          </ul>
        </section>
        <section className="footer-section">
          <h3>Services</h3>
          <hr />
          <ul>
            <li>Live assistance</li>
            <li>Corporate gifts</li>
            <li>Facial Appointments</li>
            <li>Click and Collect</li>
            <li>Video consultation</li>
          </ul>
        </section>
        <section className="footer-section">
          <h3>Location preferences</h3>
          <hr />
          <p>Shipping: Hong Kong, SAR</p>
        <p>Language: 繁體中文, English</p>
        </section>
        </div>
        <div>
      <section className="footer-section">
      <h3>Sustainability</h3>
      <hr />
        <p>All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation. Learn more</p>
      </section>
      <section className="footer-section">
          <h3>About</h3>
          <hr />
          <ul>
            <li>Our story</li>
            <li>Foundation</li>
            <li>Careers</li>
            <li>Privacy policy</li>
            <li>Accessibility</li>
            <li>Cookie Policy</li>
          </ul>
        </section>
      <section className="footer-section">
          <h3>Social media</h3>
          <hr />
          <ul>
            <li>Instagram </li>
            <li>Twitter </li>
            <li>LinkedIn</li>
            <li>WeChat</li>
            <li>Weibo </li>
          </ul>
        </section>
        </div>
      </div>

      <div className='copyright'><h3>© Aesop</h3></div>
    </footer>
  );
}

export default FooterTwo;
