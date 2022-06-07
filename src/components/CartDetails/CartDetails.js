import React, {useContext} from 'react';
import classes from './CartDetails.module.css'
import BackDrop from "../UI/BackDrop/BackDrop";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../store/cart-context";
import Meal from "../Meals/Meal/Meal";

const CartDetails = (props) => {

    const ctx = useContext(CartContext)

    return (
        // 遮罩层
        <BackDrop>
            <div
                className={classes.CartDetails}
                onClick={e => e.stopPropagation()}
            >
                <header className={classes.Header}>
                    <h2 className={classes.Title}>餐品详情</h2>
                    <div className={classes.Clear}>
                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                        <span>清空购物车</span>
                    </div>
                </header>
                <div className={classes.MealList}>
                    {
                        ctx.items.map(item =>
                            <Meal noDesc key={item.id} meal={item}></Meal>
                        )
                    }
                </div>
            </div>
        </BackDrop>
    );
};

export default CartDetails;
