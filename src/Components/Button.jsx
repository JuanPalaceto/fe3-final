const Button = (props) => {
    return (
      <button disabled={props.disabled} onClick={props.onClick} style={props.style} >
        {props.children}
      </button>
    );
  };
  
  export default Button;