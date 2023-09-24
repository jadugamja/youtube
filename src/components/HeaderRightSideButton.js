
const HeaderRightSideButton = ({elem}) => {
    const {icon, contents} = elem;

    switch (contents) {
        case "profile":
            return (
                <div className="align-center profile">
                    <img className="i-user" />
                </div>
            );
        default:
            return (
                <div className="align-center h-right-item">
                    <img className={`i-${icon}`} src={require(`../assets/${icon}.png`)} alt={icon} />
                </div>
            );
    }
}

export default HeaderRightSideButton;