function Button({ type, children, ...props }) {
    let className = "button";

    if (type === "submit") {
        className += " button-submit";
    } else if (type === "cancel") {
        className += " button-cancel";
    }

    return (
        <button className={className} {...props}>
        {children}
        </button>
    );
}

export default Button;