import { render ,screen } from "@testing-library/react"
import RestaurantCard, { withVeg } from "../RestaurantCard"
import MOCK_DATA from "../MOCKS/res.mock.json"
import MockComp from "../MOCKS/MockWithVeg"
import "@testing-library/jest-dom"
describe("Should Res loads",()=>{
    it("Shold load data",()=>{
        render(<RestaurantCard resdata={MOCK_DATA}/>)
        const data=screen.getByText("Barbeque Nation")
        expect(data).toBeInTheDocument();
    })
    it("Shold load with Veg",()=>{
        const Wrapper = withVeg(MockComp);
        render(<Wrapper name="Test Res"/>)
        const veg=screen.getByText("Veg")
        expect(veg).toBeInTheDocument();
    })
    
})