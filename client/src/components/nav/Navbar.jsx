import React,{useState} from 'react';
import './navbar.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {RiServiceFill} from 'react-icons/ri';
import {RiMessage2Fill} from 'react-icons/ri';
const Navbar = () => {
  const [activenav,setActivenav] = useState('');
  return (
    <nav>
      <a href="#" onClick={()=>setActivenav('#')} className={activenav==='#' ? 'active':''}><AiOutlineHome /></a>
      <a href="#about" onClick={()=>setActivenav('#about')} className={activenav==='#about' ? 'active':''}><AiOutlineUser /></a>
      <a href="#experience" onClick={()=>setActivenav('#experience')} className={activenav==='#about' ? 'active':''}><BiBook /></a>
      <a href="#services" onClick={()=>setActivenav('#services')} className={activenav==='#about' ? 'active':''}><RiServiceFill /></a>
      <a href="#contact" onClick={()=>setActivenav('#contact')} className={activenav==='#about' ? 'active':''}><RiMessage2Fill /></a>
    </nav>
  )
}

export default Navbar;