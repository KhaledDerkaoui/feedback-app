const Button = ({type, version, isDisabled,children}) => {
    return ( 
        <button type={type} className={`btn btn-${version}`} disabled={isDisabled} >
            {children}
        </button>
     );
}

Button.defaultProps = {
    type:"button",
    children:"Send",
    version: "primary",
    isDisabled: false
}
 
export default Button;