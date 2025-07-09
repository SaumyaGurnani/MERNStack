import {Container, Image, Button} from 'react-bootstrap'

const MainVideo=({mainVideo})=>{
        //console.log("main Video",mainVideo)
        
        if(mainVideo===null) return <h1>Loading...</h1>
         let videoSrc=`https://www.youtube.com/embed/${mainVideo.id.videoId}`
        return <Container>
               
                {/* <Image src={mainVideo.snippet.thumbnails.high.url}
                thumbnail/> */}
                <iframe src={videoSrc}
                width={'100%'}
                height={400}
                />
                <h5>{mainVideo.snippet.title}</h5>
                <p>{mainVideo.snippet.description}</p>
                 <div style={{ marginTop: '0.5rem' }}>
       <Button variant="danger"> <a
          href={`https://www.youtube.com/watch?v=${mainVideo.id.videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: '0.95rem', color: 'white', textDecoration: 'none' }}
        >
           Watch on YouTube 
        </a></Button>
      </div>
                
        </Container>
        
}
export default MainVideo