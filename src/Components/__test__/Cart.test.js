import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import ResMenu from "../ResMenu"
import "@testing-library/jest-dom"
import Mock_Res_Items from "../MOCKS/MockResMenu.json"
import { act } from "react"
import Header from "../Header"
import Cart from "../Cart"
import { BrowserRouter } from "react-router-dom"
describe("Should load cart",()=>{
    global.fetch=jest.fn(()=>Promise.resolve({
        json:()=>Promise.resolve(Mock_Res_Items)
}))
    it("Should load items",async()=>{
       await act(async()=> render(
    <BrowserRouter>
       <Provider store={appStore}>
        <Header/>
        <ResMenu/>
        <Cart />
       </Provider>
    </BrowserRouter>))
       const item = screen.getByText("Rice Bowlz(5)")
       expect(item).toBeInTheDocument();
       fireEvent.click(item)
        const itemList = screen.getAllByTestId("resmenu");
        expect(itemList.length).toBe(5);
        const Add = screen.getAllByRole("button",{name:"ADD +"})
        expect(Add.length).toBe(5);
        fireEvent.click(Add[0])
        expect(screen.getByText("Cart-1")).toBeInTheDocument();
        expect(screen.getAllByTestId("resmenu").length).toBe(6);
        fireEvent.click(Add[1])
        expect(screen.getByText("Cart-2")).toBeInTheDocument();
        expect(screen.getAllByTestId("resmenu").length).toBe(7);

        const clear= screen.getByRole("button",{name:"Clear Cart"})
        fireEvent.click(clear);
        expect(screen.getAllByTestId("resmenu").length).toBe(5);

        expect(screen.getByText("Your Cart is Empty Go to Home Page and Select Items from Restaurants")).toBeInTheDocument();

    })

    it("Should load add button and cart adding",async()=>{
        await act(async()=> render(
     <BrowserRouter>
        <Provider store={appStore}>
         <Header/>
         <ResMenu/>
         <Cart />
        </Provider>
     </BrowserRouter>))
        const item = screen.getByText("Rice Bowlz(5)")
      
        fireEvent.click(item)       
         const Addbtn = screen.getAllByRole("button",{name:"ADD +"})      
         fireEvent.click(Addbtn[0])
         expect(screen.getByText("Cart-1")).toBeInTheDocument();
         expect(screen.getAllByTestId("resmenu").length).toBe(6);
         
     })
 
     it("Should load cart adding another item",async()=>{
        await act(async()=> render(
     <BrowserRouter>
        <Provider store={appStore}>
         <Header/>
         <ResMenu/>
         <Cart />
        </Provider>
     </BrowserRouter>))
        const item = screen.getByText("Rice Bowlz(5)")
        fireEvent.click(item)
         const Adds = screen.getAllByRole("button",{name:"ADD +"})
         fireEvent.click(Adds[0])
         fireEvent.click(Adds[4])
         expect(screen.getByText("Cart-3")).toBeInTheDocument();
         expect(screen.getAllByTestId("resmenu").length).toBe(8);

     })
 it("Should load cart page",async()=>{
await act(async()=> render(
    <BrowserRouter>
    <Provider store={appStore}>
     <Header/>
     <ResMenu/>
     <Cart />
    </Provider>
 </BrowserRouter>
))

expect(screen.getByText("Cart")).toBeInTheDocument();

 })

it("Should load cart Button",async()=>{
await act(async()=> render(
   <BrowserRouter>
   <Provider store={appStore}>
    <Header/>
    <ResMenu/>
    <Cart />
   </Provider>
</BrowserRouter>
))

expect(screen.getByRole("button",{name:"Clear Cart"})).toBeInTheDocument();

})
it("Should load cart cleard",async()=>{
    await act(async()=> render(
       <BrowserRouter>
       <Provider store={appStore}>
        <Header/>
        <ResMenu/>
        <Cart />
       </Provider>
    </BrowserRouter>
    ))
    const item = screen.getByText("Rice Bowlz(5)")
       fireEvent.click(item)
        const Add = screen.getAllByRole("button",{name:"ADD +"})
        fireEvent.click(Add[0])
        fireEvent.click(Add[1])

        const clear= screen.getByRole("button",{name:"Clear Cart"})
        fireEvent.click(clear);
        expect(screen.getAllByTestId("resmenu").length).toBe(5);

        expect(screen.getByText("Your Cart is Empty Go to Home Page and Select Items from Restaurants")).toBeInTheDocument();

})
})
