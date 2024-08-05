import { fireEvent, render , screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"

import "@testing-library/jest-dom"

describe("Should load Header",()=>{
it("Should load button",()=>{
    render( 
        <BrowserRouter>
    <Provider store={appStore}>
        <Header/>
    </Provider>
    </BrowserRouter>
    )

    const loginButton =screen.getByRole("button");
    // if multiple button
    const mulButton =screen.getByRole("button",{name:"Login"});
    expect(loginButton).toBeInTheDocument();
    expect(mulButton).toBeInTheDocument();
})
it("Should load cart items",()=>{
    render( 
        <BrowserRouter>
    <Provider store={appStore}>
        <Header/>
    </Provider>
    </BrowserRouter>
    )

//    const cartItems = screen.getByText("Cart-0");
// to check the cart
const cartItems =screen.getByText(/Cart/)
    expect(cartItems).toBeInTheDocument();
})
it("Should logout on click",()=>{
    render( 
        <BrowserRouter>
    <Provider store={appStore}>
        <Header/>
    </Provider>
    </BrowserRouter>
    )

//    const cartItems = screen.getByText("Cart-0");
// to check the cart
    const login=screen.getByRole("button",{name:"Login"});
    fireEvent.click(login);
    const logOut= screen.getByRole("button",{name:"Logout"});
    expect(login).toBeInTheDocument();
    expect(logOut).toBeInTheDocument();


})
})