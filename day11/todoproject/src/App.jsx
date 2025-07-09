import {Container} from 'react-bootstrap'
import Input from '../components/Input.jsx'
import List from '../components/List.jsx'
import {useState} from 'react'
const App=()=>{
  //const [task,setTask]=useState('')
  const [taskList,setTaskList]=useState([])
  const onAddTodo=(todo)=>{
    //setTask(todo)
    let newTaskList=[...taskList]
    newTaskList.push(todo)
    setTaskList(newTaskList)
    

  }
  const onDelete=(clickOnthatItem)=>{
    let updatedList=taskList.filter(item=>item!==clickOnthatItem)
    setTaskList(updatedList)
  }
  return <Container className="text-center">
    <h1>To Do App</h1>
    
    <Input onSubmit={onAddTodo}/>
    <List taskList={taskList} onDelete={onDelete}/>
  </Container>

}

export default App
