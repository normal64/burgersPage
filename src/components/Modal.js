import React from "react";
import ReactDOM from "react-dom";
import { useNavigate, useParams } from "react-router-dom";

const Modal = props => {
    // const navigate = useNavigate();
    console.log(`props`, props);
    return ReactDOM.createPortal(
        <div className='ui dimmer modals visible active'>
            <div className="ui standard modal visible active">
                <div className="header">
                Your order is proceeding
                </div>
                <button className="positive right floated ui button"
                onClick={props.onStateChange}
                >
                    Continue
                </button>
            </div>


        </div>,
        document.querySelector("#modal")
    );
}
export default Modal;