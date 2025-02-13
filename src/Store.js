import { configureStore, createSlice } from "@reduxjs/toolkit";


// Product Slice
const productsSlice = createSlice({
    name: 'products',
    initialState: {
        veg: [
            { name: 'MushRoom', price: 150.8 ,image:"https://www.jiomart.com/images/product/original/590000245/button-mushroom-200-g-product-images-o590000245-p590000245-1-202408070949.jpg?im=Resize=(420,420)"},
            { name: 'Tomato', price: 200.5 ,image: "https://tse3.mm.bing.net/th?id=OIP.VLq0kRvM53MGoT7XMmwLOwHaE8&pid=Api&P=0&h=180" },
            { name: 'Potato', price: 100.8 , image:"https://tse3.mm.bing.net/th?id=OIP.xdxwjQ_mSva9hgccLToezgHaE9&pid=Api&P=0&h=180"},
            { name: 'Carrot', price: 150.8 , image:"https://tse3.mm.bing.net/th?id=OIP.h8ISIodUaQRtSBU06KkvPwHaGr&pid=Api&P=0&h=180"},
            { name: 'Onion', price: 150.8 ,image:"https://organicmandya.com/cdn/shop/files/SpringOnion.jpg?v=1721375462&width=1000"},
            { name: 'Brinjal', price: 150.8 ,image:"https://www.allthatgrows.in/cdn/shop/products/Brinjal-Long.jpg?v=1598078913"},
            { name: 'Peas', price: 150.8 ,image:"https://tse4.mm.bing.net/th?id=OIP.SqG26vx3PHnNfi8jevF9JgHaEo&pid=Api&P=0&h=180"},
            { name: 'BitterGaurd', price: 150.8 ,image:"https://tse3.mm.bing.net/th?id=OIP.F5T7VfUkGNw7V7EgkSLsrwHaD3&pid=Api&P=0&h=180"}, 
        ],
        nonVeg: [
            { name: 'chicken-65', price: 200.5 ,image:"https://tse2.mm.bing.net/th?id=OIP.PVuUzNdXnMDyA5QFOydFlwHaEK&pid=Api&P=0&h=180"},
            { name: 'Fish-Fry', price: 100.8 ,image:"https://tse1.mm.bing.net/th?id=OIP.Utz-BhMyLk1FzUaqx3nilgHaHa&pid=Api&P=0&h=180"},
            { name: 'Biryani', price: 150.8 ,image:"https://tse1.mm.bing.net/th?id=OIP.RzJfmrSX00YO7lRLmf7GiAHaE8&pid=Api&P=0&h=180"},
            { name: 'Chicken-lolipop', price: 150.8 ,image:"https://tse3.mm.bing.net/th?id=OIP.JPqhOa2yWScL4xERS-DPUgHaIH&pid=Api&P=0&h=180"},
            { name: 'Egg-rice', price: 150.8 ,image:"https://thefoodietakesflight.com/wp-content/uploads/2021/08/Easy-Vegan-Soy-Sauce-Egg-Fried-Rice-Recipe-8-of-24.jpg"},
            { name: 'Prawns', price: 150.8 ,image:"https://5.imimg.com/data5/IR/TQ/UN/SELLER-7232341/prawns-cleand-pd-.jpg"},
            { name: 'Tuna-Fish', price: 150.8 ,image:"https://media.istockphoto.com/id/1301917262/photo/fresh-tuna-fish-fillet-steaks-garnished-with-parsley-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=tJMZC7tI0VOChyIS8fB-Jh0G91e8wO2UAT7ejGr1Djg="},
            { name: 'Mutton', price: 150.8 ,image:"https://tse1.mm.bing.net/th?id=OIP.tWalUWrEPWfd4J7oDUiZPgHaFR&pid=Api&P=0&h=180"},
            { name: 'Lamb', price: 150.8 ,image:"https://tse1.mm.bing.net/th?id=OIP.I3eqIWB7xpZ3w4JwCET8WQHaD_&pid=Api&P=0&h=180"}
        ],
        milk: [
            { name: 'Jersy Milk', price: 50.5 ,image:"https://godrejjersey.azurewebsites.net/s3/products/a2d181824555999af963c12.png"},
            { name: 'paneer', price: 800.8 ,image:"https://healthynibblesandbits.com/wp-content/uploads/2018/10/How-to-Make-Paneer-10.jpg"},
            { name: 'Butter', price: 200 ,image:"https://cdn-jjcgb.nitrocdn.com/qCWRNWpLzZyEXGBZmEKXpSZwWTMmIhSo/assets/images/optimized/rev-3e5f764/www.ariyancorp.com/wp-content/uploads/2020/04/Blended-Butter-1024x683.jpg"},
            { name: 'Ghee', price: 600.8 ,image:"https://sitarafoods.com/wp-content/uploads/2022/07/01-8-1.jpg"},
            { name: 'Cheese', price: 400.3 ,image:"https://fhafnb.com/wp-content/uploads/2023/09/swiss-cheese.jpg"},
            { name: 'Kharvas', price: 500.2 ,image:"https://madhurasrecipe.com/wp-content/uploads/2020/10/Kharvas-Marathi-Recipe.jpg"},
            { name: 'Yogurt', price: 150.8 ,image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Turkish_strained_yogurt.jpg/330px-Turkish_strained_yogurt.jpg"},
            { name: 'Curd', price: 40.0 ,image:"https://vanitascorner.com/wp-content/uploads/2019/06/Making-curd.jpg"},
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