import TaskList from '../tasklist/TaskList.jsx';
import TaskListNumber from '../other/TaskListNumber.jsx';
import Header from '../other/Header.jsx';


const EmployeeDashboard = (props) => {
  
  
  return (
    <div className='p-20 bg-[#1C1C1C] h-screen'>
      
      <Header changeUser={props.changeUser} data ={props.data}/>
      <TaskListNumber data ={props.data} />
      <TaskList data ={props.data}  />
    </div>
  )
}

export default EmployeeDashboard
