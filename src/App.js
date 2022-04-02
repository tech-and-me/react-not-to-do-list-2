import {useState} from 'react';
import AddTask from './components/AddTask';
import Header from './components/Header'
import Tasks from './components/Tasks'
import Footer from './components/Footer'

import 'font-awesome/css/font-awesome.min.css';

const innitialBadtask = [
  {
    id: 1,
    task: "watching movie",
    hr:3  
  },
  {
    id: 2,
    task: "window shopping",
    hr:3  
  }


];

const innitialGoodtask = [
  {
    id: 1001,
    task: "Programming in React.js",
    hr:4  
  },
  {
    id:1002 ,
    task: "Online Networking Event",
    hr:1  
  },
  {
    id: 1003,
    task: "teaching kids coding in Python",
    hr: 2  
  },
  {
    id: 1004,
    task: "Developing curriculum",
    hr: 2  
  },

];

const App = () => {
  const [goodTaskList,setGoodTaskList] = useState(innitialGoodtask);
  const [badTaskList,setBadTaskList] = useState(innitialBadtask);
  const [showAddStatus, setShowAddStatus] = useState(false);

  const onAdd = (text,hour) => {
    const newTask = {
      id : Number(String(Date.now()).slice(5)),
      task : text,
      hr : hour
  }
  setGoodTaskList([...goodTaskList,newTask]);
}


const delFunc = (id,type) => {
    if(type==="good"){
      setGoodTaskList(goodTaskList.filter((task)=>task.id !==id));
    }else{
      setBadTaskList(badTaskList.filter((task)=>task.id !==id));
    }  
}


const switchFunc = (task,type) => {
  let newBadTasksList=[];
  let newGoodTasksList=[];

  if(type==="good"){
    newBadTasksList = [...badTaskList,task];
    newGoodTasksList = goodTaskList.filter(item=>item.id!==task.id)   
  }else{
    newGoodTasksList = [...goodTaskList,task];
    newBadTasksList = badTaskList.filter(item=>item.id!==task.id)
  }  

  setGoodTaskList(newGoodTasksList);
  setBadTaskList(newBadTasksList);

}

  return (
    <div>
      <Header changeShowAddStatus={()=> setShowAddStatus(!showAddStatus)} showAddStatus={showAddStatus}/>
      {showAddStatus && <AddTask onAdd={onAdd}/>}
      <Tasks goodTaskList={goodTaskList} badTaskList={badTaskList} onDelete={delFunc} onSwitch={switchFunc}/>   
      <Footer />
    </div>
  );
}

export default App;
