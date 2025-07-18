import { useSelector } from "react-redux";
import ListItem from "./ListItem"
import { Container } from 'react-bootstrap';
const List=()=>{
    const list=useSelector(state=>state.todos)
   
    return <Container>{list.map(item=> <ListItem item={item}/>)}</Container>
}
export default List