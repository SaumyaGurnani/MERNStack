import {InputGroup, Form, Button} from 'react-bootstrap'
import {useState} from 'react'
const Input=({onSubmit})=>{
    
    const [todo,setTodo]=useState('')
    const onSubmitHandler=()=>{
        onSubmit(todo)
        console.log(todo)
        setTodo('')
    }
    
    return(
        <InputGroup className="mb-3 mt-3">
            <Form.Control
            placeholder="Enter Your Todo..."
            value={todo}
            onChange={e=>setTodo(e.target.value)}
         />
        <Button variant="primary" onClick={onSubmitHandler}>Add</Button>

        </InputGroup>
    )

}
export default Input