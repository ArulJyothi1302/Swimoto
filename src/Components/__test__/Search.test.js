import { fireEvent, render , screen  } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "../MOCKS/restaurantmock.json"
import { act } from "react"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

    global.fetch=jest.fn(()=>{
        return Promise.resolve({
            json:()=>{
                return Promise.resolve(MOCK_DATA)
            }
        })
    })
 
   it("Should render Body",async ()=>{
    await act(async() => render (<BrowserRouter><Body /></BrowserRouter>));
    
    const searBtn = screen.getByRole("button",{name:"Search"});
    const input = screen.getByTestId("searchitems");
    fireEvent.change(input ,{ target: {value : "swee"}} )

    fireEvent.click(searBtn)
    const resList= screen.getAllByTestId("res")

    expect(resList.length).toBe(1);


    expect(searBtn).toBeInTheDocument();
   })
   it("Should load Top Res",async()=>{
    await act(async()=>render(<BrowserRouter><Body /></BrowserRouter>));
    const res = screen.getAllByTestId("res");
    expect(res.length).toBe(20);
    const topRes= screen.getByTestId("top");
    fireEvent.click(topRes);
    const rescard = screen.getAllByTestId("res");
    expect(rescard.length).toBe(16);

   })