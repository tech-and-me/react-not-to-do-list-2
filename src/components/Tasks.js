import Task from './Task';


const Tasks = ({goodTaskList,badTaskList,onDelete,onSwitch}) => {
    let totalGoodHours = 0;
    let totalBadHours = 0;
    goodTaskList.forEach(task => {totalGoodHours += task.hr; });
    badTaskList.forEach(task => {totalBadHours += task.hr; });


  return (
    <div className="displayContainer">
        <div className="BadTasksContainer">
            <div className="colHeading"><h3>DO</h3></div>
            <div className="row subTitle">
                <span className="desc">Tasks</span>
                <span>Hours</span>
                <span>Action</span>
            </div>
            {goodTaskList.map((goodTask)=>(<Task key={goodTask.id} task={goodTask} hr={goodTask.hr} type="good" onSwitch={onSwitch} onDelete={onDelete} icon="fa fa-arrow-circle-right" />))}
            <div className="row subTitle">
                <span className="totalLabel">Total </span>
                <span className="totalHr">{totalGoodHours} hours</span>
                <span></span>              
            </div>
        </div>   
       
        <div className="BadTasksContainer">
            <div className="colHeading"><h3>DO NOT</h3></div>
            <div className="row subTitle">
                <span className="desc">Tasks</span>
                <span>Hours</span>
                <span>Action</span>
            </div>
            {badTaskList.map((badTask)=>(<Task key={badTask.id} task={badTask} hr={badTask.hr} type="bad" onSwitch={onSwitch} onDelete={onDelete} icon="fa fa-arrow-circle-left"/>))}
            <div className="row subTitle">
                <span className="totalLabel">You could have saved </span>
                <span className="totalHr">{totalBadHours} hours</span>
                <span></span>              
            </div>
        </div>   
    </div>
  )
}

export default Tasks

