import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';

const HeaderSocial = () => {
  return (
    <div className='header_socials'>
        <a href="http://linkedin.com" target='blank'><BsLinkedin /></a>
        <a href="http://github.com" target='blank'><FaGithub /></a>
        <a href="http://instagram.com" target='blank'><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocial;