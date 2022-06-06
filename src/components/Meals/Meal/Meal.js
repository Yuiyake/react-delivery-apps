import React from 'react';
import classes from './Meal.module.css'

const Meal = (props) => {
    return (
        <div className={classes.Meal}>
            <div className={classes.imgBox}>
                <img src="/img/meals/1.png" alt=""/>
            </div>
            <div>
                <h2>humberger</h2>
                <p>百分百纯牛肉搭配双脆酸黄瓜洋葱粒与美味番茄酱。经典滋味让你无法自拔</p>
                <div>
                    <span>12</span>
                    <div>num</div>
                </div>
            </div>
        </div>
    );
};

export default Meal;
