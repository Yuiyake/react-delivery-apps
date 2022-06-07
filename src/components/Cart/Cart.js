import React, {useContext, useState} from 'react';
import classes from './Cart.module.css'
import iconImg from '../../asset/bag.png'
import CartContext from "../../store/cart-context";
import CartDetails from "../CartDetails/CartDetails";

const Cart = (props) => {

    const ctx = useContext(CartContext)

    // 控制详情是否显示
    const [showDetails, setShowDetails] = useState(false)

    // 显示详情页函数
    const toggleDetailsHandler = () => {
        if (ctx.totalAmount === 0) return ;
        setShowDetails(prevState => !prevState)
    }

    return (
        <div className={classes.Cart} onClick={toggleDetailsHandler}>
            {showDetails && <CartDetails></CartDetails>}
            <div className={classes.Icon}>
                <img src={iconImg} alt=""/>
                {ctx.totalAmount === 0? null : <span className={classes.TotalAmount}>{ctx.totalAmount}</span>}
            </div>
            {ctx.totalAmount === 0? <p className={classes.NoMeal}>未选购商品</p> : <p className={classes.Price}>{ctx.totalPrice}</p>}
            <button className={`${classes.Button} ${ctx.totalAmount === 0?classes.Disabled : ''}`}>去结算</button>
        </div>
    );
};

export default Cart;
