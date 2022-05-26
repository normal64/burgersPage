import _ from "lodash";

const initialState = {
    archivedOrders:[

    ],
    orders:[
    ]
}

export default(state=initialState, action) => {
    switch(action.type){
        case "EDIT_AMOUNT":
            console.log('EDIT AMOUNT ACTION CREATOR ALREADY IN REDUCER');
            console.log(`action.payload.name`, action.payload.name);
            if(state.orders.some(order => {
                return order.name == action.payload.name
            })){
                console.log("ALREADY IN THE LSIT");
                let updatedOrders = state.orders.map( order =>  {
                    if(order.name == action.payload.name){
                        order.amount = action.payload.amount;
                        return order
                    } return order
                })
                console.log("updatedOrders",updatedOrders);
                return {
                    archivedOrders: state.archivedOrders,
                    orders: updatedOrders
                };
            }
            return{
                archivedOrders: state.archivedOrders,
                orders:[
                    ...state.orders,
                    {
                        name: action.payload.name,
                            amount: action.payload.amount
                    }
                ]
            }
        case "SUBMIT_ORDER":
            console.log('payload',action.payload)
            
            return{
                archivedOrders: [state.archivedOrders, action.payload  ],
                orders:[
                    
                ]
            }

        default:
            return state;
    }
    
}