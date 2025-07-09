import {Container} from 'react-bootstrap'
import ListItem from './ListItem'

const List=({list})=>{
    
    return <Container>
        {list.map((item)=><ListItem videoDetail={item}/>)}
        
    </Container>

}
export default List