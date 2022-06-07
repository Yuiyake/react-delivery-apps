import React, {useContext} from 'react';
import classes from './Counter.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faMinus} from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../../store/cart-context";

// 引入第三方图标库


const Counter = (props) => {

    // 引入context
    const ctx = useContext(CartContext)

    // 添加购物车
    const addBtnHandler = () => {
        // props.onAdd(props.meal)
        // console.log(ctx);
        ctx.addItem(props.meal)
    }

    // 减小购物车
    const subBtnHandler = () => {
        // props.onSub(props.meal)
        ctx.removeItem(props.meal)
    }

    return (
        <div className={classes.counter}>

            {
                (props.meal.amount && props.meal.amount !== 0) ? (
                    <>
                        <button onClick={subBtnHandler} className={classes.Sub}>
                            <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <span className={classes.count}>
                            {props.meal.amount}
                        </span>
                    </>
                ) : null
            }



            <button onClick={addBtnHandler} className={classes.Add}>
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    );
};

export default Counter;
