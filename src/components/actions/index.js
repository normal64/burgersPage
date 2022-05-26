import orders from '../../apis/orders'


export const editAmount = (data) => (dispatch) =>{
    console.log("EDIT AMOUNT action creator reached");
    dispatch({
        type: "EDIT_AMOUNT",
        payload: data
    })
}
export const submitOrder = () => async(dispatch,getState) => {
    // console.log("getState", getState().menuReducer.orders);
    console.log(`orders`, orders());
    const allOrders = getState().menuReducer.orders;
    await orders.post('/orders', allOrders);
    dispatch({
        type: "SUBMIT_ORDER",
        payload: allOrders
    })
    
    
    
}