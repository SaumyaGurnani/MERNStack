import { useState} from 'react'
import {Container, Button, ListGroup , InputGroup, Form} from 'react-bootstrap'




const App=()=> {
  const [todo,setTodo]=useState('');
  const [list,setList]=useState([]);
  const onAddHandler=()=>{
    let newarr=[...list];//new ref
    newarr.push(todo);//new ref push
    setList(newarr);//setter func has to passed new ref
    setTodo('');//reset input

  }
  const Deletehandler=(item)=>{
    let newarr=list.filter(task=>task!=item)
    setList(newarr)
  }
  return <Container className="text-center">
      <h1>TODO APP</h1>

        <InputGroup className="mb-3 mt-3">
        <Form.Control
          placeholder="Enter your TODO..."
          value={todo}
          onChange={e=>setTodo(e.target.value)}
          
        />
        <Button variant="primary" onClick={onAddHandler}>Add</Button>
        
      </InputGroup>
      <ListGroup>
        {list.map((item,idx)=><ListGroup.Item key={idx} onDoubleClick={()=>Deletehandler(item)}>{item}</ListGroup.Item>)}
      </ListGroup>
      </Container>
      
  
         
}

export default App
