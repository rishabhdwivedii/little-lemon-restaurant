import './Footer.css';
import footerImage from '../assets/footer-logo.png'

const Footer = () => {
  return (
    <div className='contact'>
    <footer className="footer-container">
      <div className="footer-item">
        {/* Footer image */}
        <img src={footerImage} alt="Footer" />
      </div>
      <div className="footer-item">
        {/* Contact */}
        <h3>Contact</h3>
        <p>Phone: +1 (123) 456-7890</p>
        <p>Email: info@example.com</p>
        <p>Address: 123 Main Street, City, Country</p>
      </div>
      <div className="footer-item">
        {/* Social Media */}
        <h3>Social Media</h3>
        <p>LinkedIn: linkedin.com/company/example</p>
        <p>Twitter: twitter.com/example</p>
        <p>Instagram: instagram.com/example</p>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
