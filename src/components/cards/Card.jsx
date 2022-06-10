import React from 'react';
import { useCart } from '../../contexts/CartProvider';
import './Card.scss';

const Card = ({price, name,description,picture,id}) => {
    const {setCart,cart}=useCart();
    const handleAddCart=()=>{
    //Add to cart the Id
        const exist=cart.find((item)=>item.id===id);
        const product={
            name:name,
            price:price,
            id:id
        }
        if(exist){
            setCart(cart.map(item=>item.id===id ?{...exist,qty:exist.qty+1}:item));
        }
        else{
            setCart([...cart,{...product,qty:1}]);
        }
    }  

    const HandleRemoveCart=()=>{
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

    return (
        <div className="Card">
            <h2>{name}</h2>
           <div className="CardImgContainer"><img src={picture} alt={name} /></div> 
            <p className='CardPriceBtn'>
                <span className="descLeft"> Prix : {price} €</span>
                <span className="descRight">
                    <span className="AddBtn Btn" onClick={handleAddCart}>+</span>
                    <span className="RemoveBtn Btn" onClick={HandleRemoveCart}>-</span>
                </span>
            </p>
            <p className='CardDescription'>{description}</p>

        </div>
    )
}

export default Card