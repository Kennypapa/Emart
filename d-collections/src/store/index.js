import {createSlice, configureStore} from '@reduxjs/toolkit';
// const initialState = [];
const cartSlice = createSlice({
    name: 'Cart',
    initialState: [],
    reducers: {
        ADDITEM(state, action){
            const product = action.payload;
            console.log(product);
            const exist =  state.find(x => x.id === product.id);
            if(exist){
                return state.map((x) => 
                  x.id === product.id ? {...x, qty: x.qty + 1} : x
                )
            }else{
                const product  = action.payload;
                return [
                    ...state,
                    {
                        ...product,
                        qty:1
                    }
                ]
            }
        },
        DELITEM(state,action) {
            const product = action.payload;
            const exist1 = state.find((x) => x.id === product.id);
            if(exist1.qty === 1){
                return state.filter((x) => x.id !== product.id )
            }else{
                return state.map((x) => 
                  x.id === product.id ? {...x, qty: x.qty-1} : x
                );
            }
        }
    }

});


const store = configureStore({
    reducer: cartSlice.reducer
});

export const cartActions = cartSlice.actions;

export default store;
