import {Col,Container,Row} from 'react-bootstrap'
import MainVideo from './components/MainVideo.jsx'
import List from './components/List.jsx'
import SearchBar from './components/SearchBar.jsx'
import {useEffect} from 'react'
import youtube from './api/youtube.js'
import {useState} from 'react'
const App=()=>{
  const [mainVideo,setMainVideo]=useState(null)
  const[list,setList]=useState([])
  console.log("A")
  useEffect(()=>{
    async function getData(){
      const response= await youtube.get('search',{
        params:{
          part:'snippet',
          maxResults:5,
          key:"AIzaSyDXCSHWoXyCdP5JipPe563xS5JoQsxlwZU",
          q:"srk"
        }}
      )
      console.log(response.data,"==>response")
      setMainVideo(response.data.items[0])
      setList(response.data.items)
    }
    getData()

  },[])
  return <Container className="mt-4">
    {console.log("C")}
    <SearchBar/>
    
    <Row>
      <Col sm={8} >
      <MainVideo mainVideo={mainVideo}/>
      </Col>
      <Col sm={4}>
      <List list={list}/>
      </Col>
    </Row>
  </Container>


}
export default App