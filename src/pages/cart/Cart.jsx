import React from 'react'
import './Cart.scss';
import { useCart } from '../../contexts/CartProvider';

const Cart = () => {
  const {cart,setCart}=useCart();
  let totalPrice=0;
  const handleAddCart=(id)=>{
    //Add to cart the Id
        const exist=cart.find((item)=>item.id===id);
        if(exist){
            setCart(cart.map(item=>item.id===id ?{...exist,qty:exist.qty+1}:item));
        }
    }  

    const HandleRemoveCart=(id)=>{
       const exist=cart.find((item)=>item.id===id);
       
       if(exist.qty===1){
           setCart(cart.filter(
               (item)=>item.id !==id
           ))
       }
       else{
           setCart(cart.map(item=>item.id ===id ? {...exist,qty:exist.qty-1}:item));
       }
    }

  cart.forEach((item)=>{
    let middlePrice=item.qty*item.price;
    totalPrice+=middlePrice;
  })

  return (
    <div className="Cart">
      <h2>Votre panier</h2>
      <div className="cartContent">
        {cart.length!==0 &&
        <div className="CartTable">
          <table>
            <tr>
              <th>&nbsp;</th>
              <th className='CartCell'>Désignation</th>
              <th className='CartCell'>Prix Unitaire</th>
              <th className='CartCell'>Quantité</th>
              <th className='CartCell'>Prix total</th>
              <th>&nbsp;</th>
              <th>&nbsp;</th>
            </tr>
            {cart.map((item,index)=>{
              return(
                <tr key={item.id}>
                  <td  className='CartCell'>{index+1}</td>
                  <td className='CartCell'>{item.name}</td>
                  <td className='CartCell'>{item.price}</td>
                  <td className='CartCell'>{item.qty}</td>
                  <td className='CartCell'>{item.price*item.qty}</td>
                  <td onClick={()=>handleAddCart(item.id)}>+</td>
                  <td onClick={()=>HandleRemoveCart(item.id)}>-</td>
                </tr>
              )
            })}
          </table>
          <p>Prix total : {totalPrice}</p>
        </div>
        }
        {cart.length===0&&
        <p>Votre panier est vide</p>}
      </div>
    </div>
  )
}

export default Cart