import "./Footer.scss";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div>
          <img src="./assets/icons/logo.svg" />
          <br />

          <h3>Copyright 2021. Antools</h3>
          <br />
          <p className="primary-text">
            Antool is a web collection of <br /> information on paid or free
            Design <br /> and Development tools
          </p>
        </div>
        <div>
          <h3>Contact Us</h3>
          <br />
          <p className="primary-text">+621987463</p>
          <p className="primary-text">M Building, No.10 A</p>
          <p className="primary-text">antools@awesome.com</p>
        </div>
        <div>
          <h3>Categories</h3>
          <br />
          <p className="primary-text">Design</p>
          <p className="primary-text">Development</p>
        </div>
        <div>
          <h3>Company Info</h3>
          <br />
          <p className="primary-text">About Us</p>
          <p className="primary-text">Our Partners</p>
          <p className="primary-text">Blog</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
