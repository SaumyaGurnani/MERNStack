import {useState} from 'react'
import {Container,Card,Button} from 'react-bootstrap';
const Hero=(props)=>{
    
    let [name,setName] = useState(props.heroName)
    const [btnTxt, setBtnTxt]=useState(false)
    const [bgColor, setBgColor]=useState('blue')
    const nameChangeHandler= () =>{
        setName('Natasha Romanoff')
        setBtnTxt(true);
        setBgColor('pink')
        


    }
    return <Container>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} width={500} height={300}/>
      <Card.Body style={{backgroundColor:bgColor}}>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Button variant="primary" onClick={()=>nameChangeHandler()}>{btnTxt? 'Gorgeous girl': 'Take Action'}</Button>
      </Card.Body>
    </Card>
    </Container>
}
export default Hero