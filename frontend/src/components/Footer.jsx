import { Link } from "react-router-dom";
import "../css/Footer.css";
const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="container bottom_border">
        <div className="row">
          <div className=" col-sm-4 col-md col-sm-4  col-12 col">
            <h5 className="headin5_amrc col_white_amrc pt2">Address</h5>
            <p className="mb10">
              Grocery store is a shop that is operating from 15 years now in the
              city of Durres. You can find all sort of products with the lowest
              prices in the market. We are only a step away.
            </p>
            <p>
              <i className="fa fa-location-arrow"></i> Street Alexander Goga,
              near the hospital
            </p>
            <p>
              <i className="fa fa-phone"></i> +355697777777
            </p>
            <p>
              <i className="fa fa fa-envelope"></i> groceryStore@gmail.com{" "}
            </p>
          </div>

          <div className=" col-sm-4 col-md  col-6 col">
            <h5 className="headin5_amrc col_white_amrc pt2">Quick links</h5>
            <ul className="footer_ul_amrc">
              <li>
                <Link to="https://www.transfermarkt.com/">Transfer Market</Link>
              </li>
              <li>
                <Link to="https://www.w3schools.com/">W3Schools</Link>
              </li>
              <li>
                <Link to="https://codewithmosh.com/">Code with Mosh</Link>
              </li>
              <li>
                <Link to="http://amazon.com">Ebay & Amazon</Link>
              </li>
              <li>
                <Link to="https://weather.com/?Goto=Redirected">Weather </Link>
              </li>
              <li>
                <Link to="https://www.bbc.com/">BBC news</Link>
              </li>
            </ul>
          </div>

          <div className=" col-sm-4 col-md  col-6 col">
            <h5 className="headin5_amrc col_white_amrc pt2">Quick links</h5>
            <ul className="footer_ul_amrc">
              <li>
                <a href="https://www.amazon.com/" target="_blank">
                  Amazon
                </a>
              </li>
              <li>
                <a href="https://www.neptun.al" target="_blank">
                  Neptun electronics
                </a>
              </li>
              <li>
                <a href="https://www.azaelectronics.com" target="_blank">
                  Aza Electronics
                </a>
              </li>
              <li>
                <a href="https://www.alibaba.com/" target="_blank">
                  Alibaba
                </a>
              </li>
              <li>
                <a href="https://www.dolcegabbana.com/en/" target="_blank">
                  Dolce&Gabbana
                </a>
              </li>
              <li>
                <a href="https://www.zara.com" target="_blank">
                  Zara
                </a>
              </li>
            </ul>
          </div>

          <div className=" col-sm-4 col-md  col-12 col">
            <h5 className="headin5_amrc col_white_amrc pt2">Follow us</h5>

            <ul className="footer_ul2_amrc">
              <li>
                <a href="http://instagram.com">
                  <i className="fab fa-instagram"></i>{" "}
                </a>
                <p>
                  Follow us on our instagram page...
                  <a href="http://instagram.com/" target="_blank">
                    https://www.instagram.com
                  </a>
                </p>
              </li>
              <li>
                <a href="http://facebook.com">
                  <i className="fab fa-facebook-f"></i>{" "}
                </a>
                <p>
                  Follow us on our facebook page...
                  <a href="http://facebook.com/" target="_blank">
                    https://www.faceook.com
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container">
        <ul className="foote_bottom_ul_amrc">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>

          <li>
            <Link to="cart">My cart</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <p className="text-center">Copyright @2022 | Designed by Enri Rane</p>

        <ul className="social_footer_ul">
          <li>
            <a href="http://facebook.com">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="http://github.com">
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a href="http://linkedin.com">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="http://instagram.com">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
