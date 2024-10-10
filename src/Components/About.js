import React from "react";
import User from "./User";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <div className=" flex flex-col justify-center h-screen items-center">
        <h3 className="font-bold">About Us!</h3>
        <h2 className="m-4">Fast Delivering Food App</h2>
        <div>
          <h1>
            LoggedIn_User:
            {
              <UserContext.Consumer>
                {({ loggedInUser }) => (
                  <span className="px-4 font-semibold">{loggedInUser}</span>
                )}
              </UserContext.Consumer>
            }
          </h1>
        </div>

        <User
          name="Arul"
          email="aruljyothi0202@gmail.com"
          location="Chennai"
          Contact="https://twitter.com/ArulJyothi13"
        />
      </div>
    );
  }
}
export default About;
