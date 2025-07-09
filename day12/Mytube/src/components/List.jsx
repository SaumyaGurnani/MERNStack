import {Container} from 'react-bootstrap'
import ListItem from './ListItem'

const List=({list,setMainVideo})=>{
    if(list.length===0) return <h1>Loading...</h1>
    return <Container>
        {list.map((item)=><ListItem videoDetail={item} setMainVideo={setMainVideo}/>)}
        
    </Container>

}
export default List