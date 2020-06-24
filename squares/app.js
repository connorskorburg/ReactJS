const Square = (props) => {
    return React.createElement(
        "h1",
        {
            style: {
                backgroundColor: props.backgroundColor,
                color: props.textColor,
                display: "inline-block",
                height: "250px",
                width: "250px"
            }
        },
        props.textColor + " on " + props.backgroundColor
    );
}

ReactDOM.render(
    React.createElement(
        "div",
        {},
        Square(
            {
                backgroundColor: "blue",
                textColor: "white"
            }
        ),
        Square(
            {
                backgroundColor: "red",
                textColor: "blue"
            }
        ),
        Square(
            {
                backgroundColor: "pink",
                textColor: "green"
            }
        ),
    ),
    document.getElementById("app")
);