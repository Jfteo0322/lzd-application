/**
 *
 * Footer
 *
 */

import React from 'react';

import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

import Newsletter from '../../../containers/Newsletter';

const Footer = () => {
  return (
    <footer className='footer'>
      <footer style={{ background: "#fafaf0" }}>
      <Container>
      <div className="footer-content">
            <div className="footer-block">
              <div className="block-title">
                <h3 className="text-uppercase">About Us</h3>
                <p>Lazadee offer a quick, safe and convenient online shopping experience.</p>
                <i className='fa fa-truck'/>&nbsp;<span>Free Shipping</span>
              </div>
            </div>
            <div className="footer-block">
              <div className="block-title">
                <h3 className="text-uppercase">Get in Touch</h3>
                <p><i class="fa fa-envelope"aria-hidden="true"/>&nbsp;<span>Email: jackfeng0322@gmail.com</span></p>
                <p><i className='fa fa-phone'/>&nbsp;<span>Phone: 016-221 9438</span></p>
              </div>
            </div>
            <div className="footer-block">
              <div className="block-title">
                <h3 className="text-uppercase">Address</h3>
                <p><i class="fa fa-map-marker"aria-hidden="true"/>&nbsp;<span>No 46, Jalan Batu Nilam 30, Bukit Tinggi 2, Klang, Selangor</span></p>
              </div>
            </div>
          </div>
         
        <div className='footer-copyright'>
          <span>© {new Date().getFullYear()} Lazadee | All Rights Reserved</span>
        </div>
        <ul className='footer-social-item'>
          <li>
            <a href='/#facebook' rel='noreferrer noopener' target='_blank'>
              <span className='facebook-icon' />
            </a>
          </li>
          <li>
            <a href='/#instagram' rel='noreferrer noopener' target='_blank'>
              <span className='instagram-icon' />
            </a>
          </li>
          <li>
            <a href='/#twitter' rel='noreferrer noopener' target='_blank'>
              <span className='twitter-icon' />
            </a>
          </li>
        </ul>
      </Container>
      </footer>
    </footer>
  );
};

export default Footer;
