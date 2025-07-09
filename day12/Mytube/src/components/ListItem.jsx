import {Container,Col, Row,Image} from 'react-bootstrap'
const ListItem=({videoDetail,setMainVideo})=>{
    console.log(videoDetail)
return <Container className="mb-3 list-item" onClick={()=>setMainVideo(videoDetail)}>
    <Row>
        <Col sm={6}>
        <Image src={videoDetail.snippet.thumbnails.medium.url}
                thumbnail/>
        </Col>
        <Col sm={6}>
        {videoDetail.snippet.title}
        </Col>
    </Row>
</Container>
}
export default ListItem