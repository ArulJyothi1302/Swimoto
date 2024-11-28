import cart from "../images/cart.png";
import emptycart from "../images/emptyCart.jpeg";
import ImageError from "../images/ImageError.jpeg";
import PagenotFound from "../images/Errorimg.webp";
import NoInternet from "../images/nointernet.png";
import GrocerySoon from "../images/Grocery.webp";
export const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const ITEM_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";

export const LOGO_URL =
  "https://res.9appsinstall.com/group4/M01/9D/91/gRoGAFwk-WOAbzEOAAAqG9kPHqc646.png?x-oss-process=style/mq200";

export const RES_MENU =
  "https://cors-anywhere.herokuapp.com/" + `${process.env.REACT_APP_SWIG_API}`;

export const RES_LIST =
  "https://cors-anywhere.herokuapp.com/" +
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0843007&lng=80.2704622&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
export const EMPTYCART = emptycart;
export const CART_LOGO = cart;
export const IMG_ERR = ImageError;
export const NO_INT = NoInternet;
export const ERR_IMG = PagenotFound;
export const GROC_IMG = GrocerySoon;
