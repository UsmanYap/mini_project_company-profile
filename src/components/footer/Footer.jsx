import React from "react";

const Footer = () => {
  return (
    <>
      <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-12 mb-4">{/* <img src="images/logo.png" class="logo img-fluid" alt=""> */}</div>

            <div class="col-lg-4 col-md-6 col-12 mb-4">
              <h5 class="site-footer-title mb-3">Quick Links</h5>

              <ul class="footer-menu">
                <li class="footer-menu-item">
                  <div class="footer-menu-link">Our Story</div>
                </li>

                <li class="footer-menu-item">
                  <div class="footer-menu-link">Newsroom</div>
                </li>

                <li class="footer-menu-item">
                  <div class="footer-menu-link">Causes</div>
                </li>

                <li class="footer-menu-item">
                  <div class="footer-menu-link">Become a volunteer</div>
                </li>

                <li class="footer-menu-item">
                  <div class="footer-menu-link">Partner with us</div>
                </li>
              </ul>
            </div>

            <div class="col-lg-4 col-md-6 col-12 mx-auto">
              <h5 class="site-footer-title mb-3">Contact Information</h5>

              <p class="text-white d-flex mb-2">
                <i class="bi-telephone me-2"></i>

                <div class="site-footer-link">081377128</div>
              </p>

              <p class="text-white d-flex">
                <i class="bi-envelope me-2"></i>

                <div class="site-footer-link">donate_sus@sparta.id</div>
              </p>

              <p class="text-white d-flex mt-3">
                <i class="bi-geo-alt me-2"></i>
                Indonesia,
              </p>

              <div class="custom-btn btn mt-3">Get Direction</div>
            </div>
          </div>
        </div>

        <div class="site-footer-bottom">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-md-7 col-12">
                <p class="copyright-text mb-0">
                  Copyright © 2022 <a>Kind Heart</a> <a href="https://templatemo.com" target="_blank"></a>
                  Distribution:
                  <a href="https://themewagon.com"></a>
                </p>
              </div>

              <div class="col-lg-6 col-md-5 col-12 d-flex justify-content-center align-items-center mx-auto">
                <ul class="social-icon">
                  <li class="social-icon-item">
                    <div class="social-icon-link bi-twitter"></div>
                  </li>

                  <li class="social-icon-item">
                    <div class="social-icon-link bi-facebook"></div>
                  </li>

                  <li class="social-icon-item">
                    <div class="social-icon-link bi-instagram"></div>
                  </li>

                  <li class="social-icon-item">
                    <div class="social-icon-link bi-linkedin"></div>
                  </li>

                  <li class="social-icon-item">
                    <div class="social-icon-link bi-youtube"></div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
