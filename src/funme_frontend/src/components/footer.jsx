function Footer() {
  return (
      <footer style={{ padding: '20px', backgroundColor: '#f8f9fa', textAlign: 'center' }}>
          <div>
              <h4>Contact Us</h4>
              <p>Email: info@example.com</p>
              <p>Phone: (123) 456-7890</p>
          </div>
          <div>
              <h4>Follow Us</h4>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> | 
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> | 
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
          <div>
              <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
          </div>
          <nav>
              <a href="/about">About</a> | 
              <a href="/services">Services</a> | 
              <a href="/contact">Contact</a>
          </nav>
      </footer>
  );
}
