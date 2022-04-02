const Button = ({bgColor,color,label,changeShowAddStatus}) => {
    return (
      <button className= "AddTaskBtn" style={{backgroundColor:bgColor, color:color}} onClick={changeShowAddStatus}>{label}</button>
    )
  }
  
  export default Button