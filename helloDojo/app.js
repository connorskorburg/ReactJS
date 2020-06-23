const header = React.createElement("h1", null, "Hello Dojo!");
ReactDOM.render(header, document.getElementById("header"));

const subheader = React.createElement("h2", null, "Things I need to do:")
ReactDOM.render(subheader, document.getElementById("subheader"));

const li1 = React.createElement("li", null, "Learn React");
const li2 = React.createElement("li", null, "Climb Mt. Everest");
const li3 = React.createElement("li", null, "Run a Marathon");
const li4 = React.createElement("li", null, "Feed the dogs");

const content = React.createElement("ul", null, li1, li2, li3, li4);
ReactDOM.render(content, document.getElementById("content"));