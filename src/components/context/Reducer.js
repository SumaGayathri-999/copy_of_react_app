export const cartReducer = (state,action)=>{
    switch(action.type){
         case "REPLACE_STATE" :
              return action.payload;
         case "ADD_TO_CART" :
              return {...state,cart:[...state.cart, {...action.payload, qty:1}]};
        case "REMOVE_FROM_CART" :
              return {...state,cart:state.cart.filter((c)=>c.product_id!==action.payload.product_id)};
        case "INCREMENT_QUANTITY":
              return {...state,cart:state.cart.filter((c)=>c.product_id===action.payload.product_id ? c.qty=action.payload.qty+1 : c.qty)};
       case "DECREMENT_QUANTITY":
              return {...state,cart:state.cart.filter((c)=>c.product_id===action.payload.product_id ? c.qty=action.payload.qty-1 : c.qty)};
      default:
           return state;
    }
}