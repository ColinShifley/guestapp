import React from 'react';
import Mario from '../Components/images/Mario.png'
import './Icon.css'

export default function Icon() {
  return (
   <div>
     <img className={'icon'} src={Mario} alt="Logo" />
   </div>
  );
}