import { configureStore, createSlice } from "@reduxjs/toolkit";
import Login from "./Login";
import "./App.css";


// Product Slice
const productsSlice = createSlice({
    name: 'products',
    initialState: {
        veg: [
            { name: 'tomato', price: 200.5 },
            { name: 'potato', price: 100.8 },
            { name: 'carrot', price: 150.8 },
            { name: 'paneer', price: 150.8 }
        ],
        nonVeg: [
            { name: 'chicken', price: 200.5 },
            { name: 'mutton', price: 100.8 },
            { name: 'prawns', price: 150.8 },
            { name: 'fish', price: 150.8 }
        ],
        milk: [
            { name: 'Jersey', price: 200.5 },
            { name: 'Heritage', price: 100.8 },
            { name: 'Dodla', price: 150 },
            { name: 'Hatsun', price: 150.8 }
        ]
    },
    reducers: {}
});

// Cart Slice
const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart:(state,action)=>{
            const item = state.find(item=>item.name === action.payload.name)
            if(item)
            {
                item.quantity += 1;
            }
            else{
                state.push({...action.payload,quantity:1});
            }
            },
            increament:(state,action)=>{
                const item = state.find(item=>item.name === action.payload.name)
                if(item)
                {
                    item.quantity +=1;
                }
            },
            decreament:(state,action)=>{
                const item = state.find(item=>item.name === action.payload.name)
                if(item && item.quantity>1)
                {
                    item.quantity -= 1;
                }
                else{
                    return state.filter(item=>item.name !== action.payload.name)
                }
            },
            remove:(state,action) =>{
                return state.filter(item=>item.name !== action.payload.name)
            },
            clearCart: () => []
    }
});

// Orders Slice
const OrdersSlice = createSlice({
    name: "orders",
    initialState: [],
    reducers: {
        purchageDetailsReducer: (state, action) => { state.push(action.payload); },
        
    }
});


//AuthSlice
const authSlice = createSlice({
   name:"auth",
   initialState:{
    isAuthenticated : localStorage.getItem("username") ? true : false,
    user : localStorage.getItem("username") || "",   //get Stored username
   },
   reducers:{
    login:(state,action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        localStorage.setItem("username",action.payload);  //storing in localStorage
    },
    logout:(state) => {
        state.isAuthenticated = false,
        state.user = "";
        localStorage.removeItem("username");  //clearing from localStorage
    }


   }
})

// Configure Store
const store = configureStore({
    reducer: {
        products: productsSlice.reducer,
        cart: cartSlice.reducer,
        orders: OrdersSlice.reducer,
        auth:authSlice.reducer
    }
});

export const { addToCart, increament, decreament, remove,clearCart } = cartSlice.actions;
export const { purchageDetailsReducer } = OrdersSlice.actions;
export const {login,logout} = authSlice.actions;
export default store;