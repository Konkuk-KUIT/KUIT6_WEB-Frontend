const FloatingButton = ({icon}) => {
    return (
        <button className="floating">
            <img src={`/icons/${icon}`} alt="글쓰기"></img>
        </button>
    )
}

export default FloatingButton;