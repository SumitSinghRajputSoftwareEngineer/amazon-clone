import React from 'react'
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';
function Checkout() {
    const[{basket,user},dispatch] = useStateValue();
    return (
        <div className='checkout'>
            <div className="checkout_left">
                <img src="https://s.yimg.com/ny/api/res/1.2/mltBY3bN_O3cxUmpLcS0zA--/YXBwaWQ9aGlnaGxhbmRlcjtoPTY2Ng--/https://s.yimg.com/os/creatr-uploaded-images/2022-07/438a8eb0-fc2b-11ec-bef7-f55743876b66" alt="" className="checkout_ad" />
            </div>

            <div>
            <h3>Hello, {user?.email}</h3>
                <h2 className="chechout_title">
                    Your shopping basket                   
                </h2>
                {basket.map(item => (
                    <CheckoutProduct 
                        id = {item.id}
                        title = {item.title}
                        image = {item.image}
                        price = {item.price}
                        rating = {item.rating}
                    />
                ))}
                
            </div>

            <div className="checkout_right">
                <Subtotal />
             </div>
        </div>
    )
}

export default Checkout
