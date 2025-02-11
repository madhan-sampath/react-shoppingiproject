import { configureStore, createSlice } from "@reduxjs/toolkit";


// Product Slice
const productsSlice = createSlice({
    name: 'products',
    initialState: {
        veg: [
            { name: 'MushRoom', price: 150.8 ,image:"https://tse3.mm.bing.net/th?id=OIP.M4vr-t_PxdlTvg6zdVHbDQHaE9&pid=Api&P=0&h=180"},
            { name: 'Tomato', price: 200.5 ,image: "https://tse3.mm.bing.net/th?id=OIP.VLq0kRvM53MGoT7XMmwLOwHaE8&pid=Api&P=0&h=180" },
            { name: 'Potato', price: 100.8 , image:"https://tse3.mm.bing.net/th?id=OIP.xdxwjQ_mSva9hgccLToezgHaE9&pid=Api&P=0&h=180"},
            { name: 'Carrot', price: 150.8 , image:"https://tse3.mm.bing.net/th?id=OIP.h8ISIodUaQRtSBU06KkvPwHaGr&pid=Api&P=0&h=180"},
            { name: 'Onion', price: 150.8 ,image:"https://tse4.mm.bing.net/th?id=OIP.VX-fRronTA0KV1puV3fvkAHaE8&pid=Api&P=0&h=180"},
            { name: 'Brinjal', price: 150.8 ,image:"https://tse1.mm.bing.net/th?id=OIP.v9xh2rnmlG2WClFbCLrU8AHaHa&pid=Api&P=0&h=180"},
            { name: 'Peas', price: 150.8 ,image:"https://tse4.mm.bing.net/th?id=OIP.SqG26vx3PHnNfi8jevF9JgHaEo&pid=Api&P=0&h=180"},
            { name: 'BitterGaurd', price: 150.8 ,image:"https://tse3.mm.bing.net/th?id=OIP.F5T7VfUkGNw7V7EgkSLsrwHaD3&pid=Api&P=0&h=180"}, 
        ],
        nonVeg: [
            { name: 'chicken-65', price: 200.5 ,image:"https://tse2.mm.bing.net/th?id=OIP.PVuUzNdXnMDyA5QFOydFlwHaEK&pid=Api&P=0&h=180"},
            { name: 'Fish-Fry', price: 100.8 ,image:"https://tse1.mm.bing.net/th?id=OIP.Utz-BhMyLk1FzUaqx3nilgHaHa&pid=Api&P=0&h=180"},
            { name: 'Biryani', price: 150.8 ,image:"https://tse1.mm.bing.net/th?id=OIP.RzJfmrSX00YO7lRLmf7GiAHaE8&pid=Api&P=0&h=180"},
            { name: 'Chicken-lolipop', price: 150.8 ,image:"https://tse3.mm.bing.net/th?id=OIP.JPqhOa2yWScL4xERS-DPUgHaIH&pid=Api&P=0&h=180"},
            { name: 'Egg-rice', price: 150.8 ,image:"https://thefoodietakesflight.com/wp-content/uploads/2021/08/Easy-Vegan-Soy-Sauce-Egg-Fried-Rice-Recipe-8-of-24.jpg"},
            { name: 'Prawns', price: 150.8 ,image:"https://tse2.mm.bing.net/th?id=OIP.RY3kKMMz9HW7xltludKTeAHaE8&pid=Api&P=0&h=180"},
            { name: 'Tuna-Fish', price: 150.8 ,image:"https://tse1.mm.bing.net/th?id=OIP.ij4Az0ynCSPQAiiC03_B5AHaD1&pid=Api&P=0&h=180"},
            { name: 'Mutton', price: 150.8 ,image:"https://tse1.mm.bing.net/th?id=OIP.tWalUWrEPWfd4J7oDUiZPgHaFR&pid=Api&P=0&h=180"},
            { name: 'Pork', price: 150.8 ,image:"https://tse3.mm.bing.net/th?id=OIP.d1I5yjX-mJhdUfVPtESljwHaE8&pid=Api&P=0&h=180"},
            { name: 'Lamb', price: 150.8 ,image:"https://tse1.mm.bing.net/th?id=OIP.I3eqIWB7xpZ3w4JwCET8WQHaD_&pid=Api&P=0&h=180"}
        ],
        milk: [
            { name: 'Jelabi', price: 50.5 ,image:"https://tse2.mm.bing.net/th?id=OIP.ALNVrDctDELKjmqSe9uniQHaFh&pid=Api&P=0&h=180"},
            { name: 'Gulab-Jamun', price: 80.8 ,image:"https://tse4.mm.bing.net/th?id=OIP.nTBxcq-XpKASURFqCg__bAHaHa&pid=Api&P=0&h=180"},
            { name: 'Rasgulla', price: 150 ,image:"https://tse1.mm.bing.net/th?id=OIP.LZBb3ayeVGrl6aE_4FBH6wHaLH&pid=Api&P=0&h=180"},
            { name: 'Rasmalai', price: 150.8 ,image:"https://tse3.mm.bing.net/th?id=OIP.9fhCy5FZcUbfl6QPli-mmQHaE8&pid=Api&P=0&h=180"},
            { name: 'Double-ka-meta', price: 150.8 ,image:"https://tse1.mm.bing.net/th?id=OIP.h5Azz6kDFK_DR0ZG4IxVKQHaEg&pid=Api&P=0&h=180"},
            { name: 'Cham-cham', price: 150.8 ,image:"https://tse2.mm.bing.net/th?id=OIP.K1VlJHwCr3QtdiVnctKUogHaEK&pid=Api&P=0&h=180"},
            { name: 'Ice cream', price: 150.8 ,image:"https://tse4.mm.bing.net/th?id=OIP.TcQ0vEAye_t8lWFhKNopQQHaEo&pid=Api&P=0&h=180"}
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