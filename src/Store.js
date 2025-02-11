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
            { name: 'chicken-65', price: 200.5 ,image:"https://react-repository-liard.vercel.app/Chicken-65.jpg"},
            { name: 'Fish-Fry', price: 100.8 ,image:"https://react-repository-liard.vercel.app/fishfry.jpeg"},
            { name: 'Biryani', price: 150.8 ,image:"https://react-repository-liard.vercel.app/biryani.jpg"},
            { name: 'Chicken-lolipop', price: 150.8 ,image:"https://react-repository-liard.vercel.app/chickenlolipop.jpeg"},
            { name: 'Egg-rice', price: 150.8 ,image:"https://react-repository-liard.vercel.app/eggrice.jpg"},
            { name: 'Prawns', price: 150.8 ,image:"https://react-repository-liard.vercel.app/Prawngralic.jpg"}
        ],
        milk: [
            { name: 'Jelabi', price: 50.5 ,image:"https://react-repository-liard.vercel.app/jalebi.jpeg"},
            { name: 'Gulab - Jamun', price: 80.8 ,image:"https://react-repository-liard.vercel.app/jamun.jpeg"},
            { name: 'Rasgulla', price: 150 ,image:"https://react-repository-liard.vercel.app/Rasgulla.webp"},
            { name: 'Rasmalai', price: 150.8 ,image:"https://react-repository-liard.vercel.app/rasmalai.jpg"},
            { name: 'Motichoor-Laddoo', price: 150.8 ,image:"https://react-repository-liard.vercel.app/Motichoor.jpg"},
            { name: 'Kalakand', price: 150.8 ,image:"https://react-repository-liard.vercel.app/kalakand.jpeg"},
            { name: 'Doodh-Mithi-Fini', price: 150.8 ,image:"https://react-repository-liard.vercel.app/mithifini.webp"}
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