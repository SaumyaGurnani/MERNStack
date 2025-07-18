import {Row, Col, Button } from 'react-bootstrap';
const ListItem=({item})=>{
    console.log(item)
    const onDeleteHandler=id=>{
        console.log()
    }
    return <Row className="mt-3">
        <Col>{item.text}</Col>
        <Col><Button variant="danger" onClick={()=>onDeleteHandler()}>Delete </Button><Col></Col></Col>
    </Row>
}
export default ListItem