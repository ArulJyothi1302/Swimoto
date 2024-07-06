import React from "react"
import User from "./User"

class About extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent Constructor");
    }
    componentDidMount(){
        console.log("Parent Mount");
    }
    render(){
        console.log("Parent render");
    return(
        <div>
            <h3>
                About Us!
            </h3>
            <h2>Fast Delivering Food App</h2>
            <User name="Arul" email="aruljyothi0202@gmail.com" location="Chennai" Contact="https://twitter.com/ArulJyothi13"/>
            {/* <User name="Mike" email="mike@gmail.com" location="Chennai" Contact="https://twitter.com/ArulJyothi13"/> */}
        </div>
    )
}
}
export default About