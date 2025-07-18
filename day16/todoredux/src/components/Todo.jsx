import {Container, InputGroup, Form, Button} from 'react-bootstrap'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../feature/todo/todoSlice';
const Todo=()=>{
    const [task, setTask] = useState("");
    const dispatch=useDispatch();
    const onAddHandler=()=>{
        dispatch(addTodo(task));
        setTask("")

    }
    return <Container>
        <InputGroup className="mt-3">
      
        <Form.Control
          placeholder="Enter a new task"
          value={task}
          onChange={e=> setTask(e.target.value)}

         
        />
         <Button variant="primary" onClick={onAddHandler}>Add task</Button>
      </InputGroup>

    </Container>
}
export default Todo