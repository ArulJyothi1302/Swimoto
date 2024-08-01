const { configureStore } = require("@reduxjs/toolkit");
import cartReducer from "./cartSlice";

const appStore = configureStore({
  //  main reducer -> App reducer
  reducer: {
    // combination of small store like cart, user etc..
    cart: cartReducer,
    // user:userReduce (if needed)
  },
});
export default appStore;
