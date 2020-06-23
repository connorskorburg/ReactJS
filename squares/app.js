ReactDOM.render(
    React.createElement("h1", { style: { backgroundColor: "pink", color: "green", width: "250px", height: "250px" } }, "green on pink"),
    document.getElementById("app1")
);

ReactDOM.render(
    React.createElement("h1", { style: { backgroundColor: "blue", color: "white", width: "250px", height: "250px" } }, "white on blue"),
    document.getElementById("app2")
);

ReactDOM.render(
    React.createElement("h1", { style: { backgroundColor: "red", color: "blue", width: "250px", height: "250px" } }, "blue on red"),
    document.getElementById("app3")
);