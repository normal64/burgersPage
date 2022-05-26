import {editAmount} from "../components/actions";
import { createStore, dispatch, compose, applyMiddleware } from "redux";
import {store} from "../index";



const onAmountChange = (event) => {
  let data = {
    name: "",
    price: "",
    amount: ""
  }
  
  let newAmount;
  let name;
  if(event.target.innerHTML === '+'){
    let amount = event.target.parentNode.nextElementSibling.innerHTML;
    newAmount = Number(amount) + 1;
    event.target.parentNode.nextElementSibling.innerHTML = newAmount;
    name = event.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
  }
  if(event.target.innerHTML === '-'){
    console.log("minus");
    let amount = event.target.parentNode.previousElementSibling.innerHTML;
    if(amount == 0)return
    newAmount = Number(amount) - 1;
    event.target.parentNode.previousElementSibling.innerHTML = newAmount;
    name = event.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
  }
  console.log("name",name);
  
  data.amount = newAmount;
  data.name = name;
  
  console.log("event.target.innerHTML",event.target.innerHTML);
  console.log("data object",data);
  store.dispatch(editAmount(data));
  
}

const renderPositions = (positions,theme) =>{
  console.log('theme in render', theme) 
    return  positions.map( position =>  (
      <div className="item" key={position.name}>
      <img className="ui large image" src={position.img} />
      <div className="content">
        <div className={theme === "dark" ? "header render-position-name-dark-theme" : "header render-position-name-light-theme"}>{position.name}</div>
        <div className={theme === "dark" ? "render-position-description-dark-theme" : "render-position-description-light-theme"}>
        {position.description} 
        </div>
        <br />
        <span className={theme === "dark" ? "price render-position-price-dark-theme" : "price render-position-price-light-theme"}>${position.price}</span> <br />
        <div className="ui buttons">
          <button className="ui button" onClick={(event) =>onAmountChange(event)}>+</button>
        </div>
        <div className={theme === "dark" ? "header render-position-amount-dark-theme" : "header render-position-amount-light-theme"}>{position.amount}</div>
        <div className="ui buttons">
          <button className="ui button" onClick={(event) =>onAmountChange(event)}>-</button>
        </div>
        </div>
    </div>
    )
      )
  }
  export default renderPositions;