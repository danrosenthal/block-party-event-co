import React from 'react'
import { Link } from 'gatsby'

import logo from '../images/logo.svg';
import borderTop from '../images/border-top.svg';

export default function Header({siteTitle}) {
  return (
    <>
      <div>
        <img src={borderTop} alt="" />
      </div>
      <div style={{width: '188px', height: '172px'}}>
        <h1>
          <Link to="/">
            <img src={logo} alt="Block Party Event Co." />
          </Link>
        </h1>
      </div>
    </>
  )
};
