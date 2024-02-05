import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer' id='footer'>
      <div className='container'>
        <div className='row'>
            <div className='col-md-12 col-lg-12'>
                <ul>
                    <li><a href='#'>Register</a></li>
                    <li><a href='#'>Forum</a></li>
                    <li><a href='#'>Affiliate</a></li>
                    <li><a href='#'>FAQ</a></li>
                </ul>
                <ul>
                    <li><a href='#'><i class="fa-brands fa-facebook-f"></i></a></li>
                    <li><a href='#'><i class="fa-brands fa-twitter"></i></a></li>
                    <li><a href='#'><i class="fa-brands fa-youtube"></i></a></li>
                    <li><a href='#'><i class="fa-brands fa-linkedin-in"></i></a></li>
                    <li><a href='#'><i class="fa-brands fa-instagram"></i></a></li>
                </ul>
                <p>© 2024 Foodera All rights reserved.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
