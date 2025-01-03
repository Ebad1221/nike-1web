import React from 'react';
import { FaTwitter, FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 w-full">
      <div className=" ">
        <div className="footer-2">
          <div className="footer-1">
           <div>
            <ul className="space-y-2 ml-10">
              <li className="font-medium text-white">FIND A STORE</li>
              <li>BECOME A MEMBER</li>
              <li>SIGN UP FOR EMAIL</li>
              <li>SEND US FEEDBACK</li>
              <li>STUDENT DISCOUNTS</li>
            </ul>
           </div>
           <div>
            <ul className="space-y-2">
              <li className="font-medium text-white">GET HELP</li>
              <li>Order Status</li>
              <li>Delivery</li>
              <li>Returns</li>
              <li>Payment Options</li>
              <li>Contact Us On Nike.com Inquiries</li>
              <li>Contact Us On All Other Inquiries</li>
            </ul>
           </div>
           <div>
            <ul className="space-y-2">
              <li className="font-medium text-white">ABOUT NIKE</li>
              <li>News</li>
              <li>Careers</li>
              <li>Investors</li>
              <li>Sustainability</li>
            </ul>
          </div>
          </div>
          <div className=" flex text-xl gap-3  ">
            <FaTwitter className="hover:text-white cursor-pointer  " />
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaYoutube className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer " />
          </div>
        </div>

        <div className=" footer-32  ">
          <div className="flex gap-5 ml-10 ">
              <p className="text-sm ">India</p>
              <p className="text-sm ">&copy; 2023 Nike, Inc. All Rights Reserved</p>
          </div>
          <div className=" text-sm ">
            <a href="#" className="hover:text-white">Guides</a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#" className="hover:text-white">Terms of Sale</a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#" className="hover:text-white">Terms of Use</a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#" className="hover:text-white ">Nike Privacy Policy</a>&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;