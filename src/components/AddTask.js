import {useState} from 'react';

const AddTask = ({onAdd}) => {
    const [text,setText] = useState('')
    const [hour,setHour] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if(!text){
            alert ('Please add a task')
            return
        }
  
        onAdd(text,hour)
        setText('');
        setHour('');
    }

    return (  
        <div className="addTaskContainer">
            <h2>ADD TASK</h2>
            <form className='addForm' onSubmit = {onSubmit} >     
                <div className='form-control'>
                    <label>Task</label>
                    <input type='text' placeholder="Add Task"value={text} onChange={e=>setText(e.target.value)} />
                </div>
                <div className='form-control form-control-check'>
                    <label>Hours</label>
                    <input type='text' placeholder="Allocated hours" value={hour} onChange={e=>setHour(Number(e.target.value))}/>
                </div>
                
                <input type='submit' value='Save Task' className ='submit'/>
            </form>
        </div>            
      )
}

export default AddTask