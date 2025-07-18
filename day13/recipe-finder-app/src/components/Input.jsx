import {Container, InputGroup} from 'react-bootstrap'
const Input=()=>{
    return <Container>
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
       

    </Container>

}

export default Input