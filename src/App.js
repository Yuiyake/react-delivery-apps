import React from 'react';
import Meals from "./components/Meals/Meals";

const App = () => {

    // 作为一个空父容器，不会生成实际dom。因为jsx定义内容必须被父容器包裹在内，但我们又不希望父容器在网页中产生多余结构，所以产生了这个。
    return (
        <div>
            <Meals></Meals>
        </div>
    );

};

export default App;
