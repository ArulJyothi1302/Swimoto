const { configureStore } = require("@reduxjs/toolkit");
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";

const appStore = configureStore({
  //  main reducer -> App reducer
  reducer: {
    // combination of small store like cart, user etc..
    user: userReducer,
    cart: cartReducer,

    // user:userReduce (if needed)
  },
});
export default appStore;
