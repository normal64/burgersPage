import React,{useState} from 'react';
import {Burgers} from "../data/menuData"
import renderPositions from '../help-functions/renderPositions'
import Modal from "../components/Modal"
import "../css/Menu.css"

import {store} from "../index"
import { submitOrder } from './actions';
const Menu = (props) => {
    const [rerender, setRerender] = useState(false)
    console.log(`props in menu`, props);
    console.log("menu", Burgers.map( elem => elem.name));

    const onOrderSubmit = () => {
        

        store.dispatch(submitOrder());
        setRerender(true)
        // clean amount afer orderd
    let x = document.getElementsByClassName( props.theme === 'dark'? "render-position-amount-dark-theme" : "render-position-amount-light-theme");
        for(let i = 0; i < x.length; i++){
            x[i].innerHTML = 0;
        }
    console.log("amount to zero",x[0]); 
    }
    
    console.log(`rerender state`, rerender);
    const tryMe = () =>{
        setRerender(false)
        console.log(`remove me modal`);
    }

    return (
        <div>
        {rerender ? <Modal onStateChange={tryMe} /> : null} 
        <div className="ui horizontal list">
        {renderPositions(Burgers,props.theme)}
</div>
<div className="ui  bottom attached  button positive " tabIndex="0" onClick={onOrderSubmit} >Purchase</div>
</div>
    )
}

export default Menu
