import Icon from './Icon';

const Task = ({task,onDelete, icon,type, onSwitch}) => {
  return (
        <div className="row">
            <span className="desc"> {task.task} </span>
            <span className="hr"> {task.hr} </span>
            <Icon icon={icon} task={task} type={type} onDelete={onDelete} onSwitch={onSwitch}/>        
        </div>
  )
}

export default Task