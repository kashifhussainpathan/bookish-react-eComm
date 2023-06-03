import "./footerStyle.css";

// Importing React Icons
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";

export const Footer = () => {
  return (
    <>
      <footer className="footer-section">
        {/* <div className="footer-social-media-icons">
          <a href="https://github.com/kashifhussainpathan/bookish-react-eComm">
            <AiFillGithub />
          </a>{" "}
          <a href="https://www.linkedin.com/in/kashif-hussain-pathan-51a32a25b/">
            {" "}
            <AiFillLinkedin />{" "}
          </a>
          <a href="https://twitter.com/Kashifhussainkp?t=OoyM4bB-1XQXSP0Jda8c9w&s=09">
            {" "}
            <AiFillTwitterCircle />{" "}
          </a>
        </div> */}
        <div class="footer-container">
          <div class="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <span>Delivary</span>
              </li>
              <li>
                <span>Privacy Policy</span>
              </li>
              <li>
                <span>Secure payment</span>
              </li>
              <li>
                <span>About Us</span>
              </li>
            </ul>
          </div>

          <div class="footer-contact">
            <h4>Contact Us</h4>
            <p>123 Nandra, Maheshwar, MP</p>
            <p>Phone: 123-456-7890</p>
            <p>Email: bookish@gmail.com</p>
          </div>

          <div class="footer-social">
            <h4>Follow Us</h4>
            <ul>
              <li>
                <a href="https://github.com/kashifhussainpathan/bookish-react-eComm">
                  <AiFillGithub />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/kashif-hussain-pathan-51a32a25b/">
                  <AiFillLinkedin />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/Kashifhussainkp?t=OoyM4bB-1XQXSP0Jda8c9w&s=09">
                  <AiFillTwitterCircle />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <div class="footer-credit">
          <p>© 2023 Your Website. All rights reserved.</p>
        </div> */}
      </footer>
    </>
  );
};
