import {createSlice, configureStore} from '@reduxjs/toolkit';
const initialState = { cartState: [] };

const cartSlice = createSlice({
    name: 'Cart',
    initialState: initialState,
    reducers: {
        DEFAULTCART (state = initialState) {
            state = state.concat(JSON.parse(localStorage.getItem('products') || '[]'));
        },
        INCREASEITEM(state, action){
            const product = action.payload;
            console.log(state)
           if(state.length > 0){
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
           }
        },
        REDUCEITEM(state, action) {
            const product = action.payload;
            const exist1 = state.find((x) => x.id === product.id);
            if(exist1.qty === 1){
                return state.filter((x) => x.id !== product.id )
            }else{
                return state.map((x) => 
                  x.id === product.id ? {...x, qty: x.qty-1} : x
                );
            }
        },
        ADDTOCART(state = initialState, action){
            const product  = action.payload;
            let showProducts = product;
            state.push(showProducts);
            localStorage.setItem('products', JSON.stringify(state));
        }
    }

});


const store = configureStore({
    reducer: cartSlice.reducer
});

export const cartActions = cartSlice.actions;

export default store;
