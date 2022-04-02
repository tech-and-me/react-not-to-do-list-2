import Button from './Button'


const Header = ({changeShowAddStatus,showAddStatus }) => {
  return (
    <div className="header">
        <h1>To Do and Not To Do List {showAddStatus}</h1>
        <Button bgColor={showAddStatus ? 'red' : 'cyan'} color={showAddStatus ? 'white' : 'black'} label={showAddStatus ? 'Close' : 'Add Task' } changeShowAddStatus={changeShowAddStatus} />  
    </div>
  )
}

export default Header