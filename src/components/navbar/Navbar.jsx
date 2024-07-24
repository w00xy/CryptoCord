import React from 'react'
import './Navbar.css'
import logo from '../../assets/CryptoCord.svg'
import arrow from '../../assets/up-right-arrow.png'

export default function Navbar() {
  return (
		<div className='navbar'>
			<img className='logo' src={logo} alt='' />
			<ul>
				<li>Home</li>
				<li>Features</li>
				<li>Pricing</li>
				<li>Blog</li>
			</ul>
			<div className='nav-right'>
				<select>
					<option value='usd'>USD</option>
					<option value='usd'>EUR</option>
					<option value='usd'>RUB</option>
				</select>
				<button>
					Sign up
					<img src={arrow} style={{width:12}}/>
				</button>
			</div>
		</div>
	)
}
