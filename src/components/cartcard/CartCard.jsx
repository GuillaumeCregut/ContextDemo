import React from 'react'
import './CartCard.scss';
import cartIcon from '../../assets/LogoCart.png';
import { useCart } from '../../contexts/CartProvider';
const CartCard = () => {
  let totalCartItem=0;
  const {cart}= useCart();
  cart.forEach((item)=>{
    totalCartItem+=item.qty;
  });
  if(totalCartItem<10){
    totalCartItem='0'+totalCartItem;
  }
  return (
    <div className="CartCard">
      <div className="CartLogoContainer">
        <img src={cartIcon} alt="panier" />
      </div>
      <p className='TotalItems'>{totalCartItem}</p>
    </div>
  )
}

export default CartCard