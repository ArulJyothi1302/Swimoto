<!-- // import React from 'react';
// import ReactDOM from 'react-dom/client'

// // const head = React.createElement("h1",{id:"heading",attr:"Attribute"},"Vankaam React")
// // const root =ReactDOM.createRoot(documet.getElementById("root"));
// // root.render(head);
// //  const head =React.createElement("h1",{id:"h1"},"Vanakkam React")
// //     const root = ReactDOM.createRoot(document.getElementById("root"));
// //     // root.render(head);

// //     const parent =React.createElement("div",{id:"parent"},[
// //     React.createElement("div",{id:"child"},[
// //     React.createElement("h1",{},"Im h1 tag")],
// //     [React.createElement("h2",{},"Im h2 tag")])
// //     ],
// //     [ React.createElement("div",{id:"child2"},[
// //         React.createElement("h1",{},"Im h1 tag")],
// //         [React.createElement("h2",{},"Im h2 tag")])]
// // ) -->

<!-- // const heading = (<div><h1>Welcome to react </h1> -->
<!-- //     <h2>Hello</h2> -->
<!-- //     </div> -->
<!-- // ) //babel coverts this to react.createElement
// // () is used because babel dosent know which to execute if there are more than one line of syntax
// console.log(heading) -->

<!--
// // Component in React ->Functional Component Class Component
// const Title =()=> <h3>This is Title</h3>
// const span =<span>With SAPN fom Js Element</span>
// const para =(
//     <p1>This is the element in Javascript {span}
//      <Title/>
//     </p1>

     -->
<!-- // )



// const Heading =()=>{
//     return (<div>
//         <h1>Hello Wlcome to React</h1>
//         <Title />  {/* Component Composition -->
<!-- Component inside a component */} -->
<!-- //         <Title></Title>
//         {Title()}
//         {/* All the above are Same to Render */}
//         <h5>Add:{10+20}</h5>
//         <h3>See the Console {console.log("Seeing Console from Display ha ha ha")}</h3>
//         {para}
//     </div>)
// } -->
<!--
// const Main=()=> <Heading/>
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<Main/>) -->

<!-- //****************************************************************************************************************************** */
 --> -->

<!--
            Header
            Body
                *Search
                *Restaurant Cards
                *cards
            Footer
           -->

# export default component

# import component

# export const list;

# import {list};--> Named import

# React Hooks

# (Normal js utility function)

# -useState() - superPowerful state variable

# -useEffect()

# React Routing

- CreateBrowserRouter
- RouterProvider
- Outlet for path

# Types of Routing

- Clent side
- Server side
<!------------------------------------>

# BUNDLING <!-- most important thing for large scale appliation>

 - # 1. Chunking

 - # 2. Code Splitting

 - # 3. Dynamic Bundling

 - # 4. Lazy Loading --> Loads the code in background in js when we visit the specific component in our app for better performance

 - # on demand Loading

 - # dynamic import

# Redux

# ReduxToolKit - (RTK)

- Install rtk
- intall @reduxjs/toolkit and react-redux
- Build our Store
- Connect our stire to app
- Build our Slice (card slice)
- dispatch (action)
- Read the data using selector
b
# Install React testing library
 - Install jest library
 - Install babel dependencies
 - Configured babel.config.js
 - Configure parcel config file to disable default babel transpilation
 - jest npx init
 - install jsdom lib separately
 - install babel/preset-react to work jsx in testcases
 - include in the babel config
 - install @testing-library/jest-dom
