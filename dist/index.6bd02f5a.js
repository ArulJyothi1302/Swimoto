// const head = React.createElement("h1",{id:"heading",attr:"Attribute"},"Vankaam React")
// const root =ReactDOM.createRoot(documet.getElementById("root"));
// root.render(head);
//  const head =React.createElement("h1",{id:"h1"},"Vanakkam React")
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(head);
const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "Im h1 tag")
    ], [
        React.createElement("h2", {}, "Im h2 tag")
    ])
], [
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {}, "Im h1 tag")
    ], [
        React.createElement("h2", {}, "Im h2 tag")
    ])
]);
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
