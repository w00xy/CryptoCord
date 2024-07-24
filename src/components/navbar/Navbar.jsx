import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../../assets/CryptoCord.svg'
import arrow from '../../assets/up-right-arrow.png'
import { CoinContext } from '../../context/CoinContext'

export default function Navbar() {
	const {setCurrency} = useContext(CoinContext)

	const currencyHandler = (event) => {
		switch (event.target.value){
			case 'usd': {
				setCurrency({
					name: 'usd',
					symbol: '$'
				})
			}
				break;
			case 'eur': {
				setCurrency({
					name: 'eur',
					symbol: '€',
				})
			}
				break;
			case 'rub': {
				setCurrency({
					name: 'rub',
					symbol: '₽',
				})
			}
			default: {
				setCurrency({
					name: 'usd',
					symbol: '$'
				})
				break;
			}
		}
	};

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
				<select onChange={currencyHandler}>
					<option value='usd'>USD</option>
					<option value='eur'>EUR</option>
					<option value='rub'>RUB</option>
				</select>
				<button>
					Sign up
					<img src={arrow} style={{ width: 12 }} />
				</button>
			</div>
		</div>
	)
}
