import 'font-awesome/css/font-awesome.min.css';

const Icon = ({icon,onDelete,onSwitch,task,type}) => {
    
  return (
    <span>
        <i className="fa fa-trash-o" aria-hidden="true" onClick={()=>(onDelete(task.id,type))}></i>
        <i className= {icon} aria-hidden="true" onClick={()=>onSwitch(task,type)} ></i>
    </span>
  )
}

export default Icon