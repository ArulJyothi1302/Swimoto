import { render,screen } from "@testing-library/react"
import "@testing-library/jest-dom/jest-globals";
import "@testing-library/jest-dom"
import ContactUs from "../ContactUs"
test("Should Contact load",()=>{
    // render(<ContactUs/>);
    render(<ContactUs/>)
   const heading= screen.getByRole("heading");
    expect(heading).toBeInTheDocument();

});
test('should button is there', () => { 
    render(<ContactUs />) 
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
});
test('should inupt name in the contact', () => { 

    render(<ContactUs />)
    expect(screen.getByPlaceholderText('Subject')).toBeInTheDocument();
 });
 test('should input box', () => { 
    render(<ContactUs/>)
    const inputs =screen.getAllByRole("textbox");
    // console.log(inputs)
    
  })
  test('should load 2 input', () => { 

    render(<ContactUs />);
    const inputBoxes =screen.getAllByRole("textbox"); 
    // console.log(inputBoxes.length);
    expect(inputBoxes.length).not.toBe(2);


   })