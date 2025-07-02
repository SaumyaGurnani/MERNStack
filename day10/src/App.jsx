import { Row, Col, Container } from 'react-bootstrap'
import Hero from './components/Hero.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
const App=()=>{
  const arr=[{
    heroName:"Black Widow",
    desc:"Most beautiful girl",
    pic:"https://images.unsplash.com/photo-1621453207135-e55da77bc342?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmxhY2slMjB3aWRvd3xlbnwwfHwwfHx8MA%3D%3D"

  },
  {
    heroName:"Iron Man",
    desc:"Man with a heart of gold",
    pic:"https://images.unsplash.com/photo-1635863138275-d9b33299680b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXJvbiUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    heroName:"Superman",
    desc:"Man of Steel",
    pic:"https://i.pinimg.com/736x/53/bb/7c/53bb7c09e74b05c54150f73b606dbddf.jpg"
  }
  
]
  return <Container>
    <h1 className="text-center">Marvel Stars</h1>
    <Row>
      {
      arr.map(item => <Col className="mb-3" key={item.heroName}><Hero heroName={item.heroName} description={item.desc} image={item.pic}/></Col>)
}
    </Row>
    
  </Container>
}
export default App;