import {InputGroup, Form, Button} from 'react-bootstrap'
import {useState} from 'react'
const SearchBar=({onSearch})=>{
 const[search,setSearch]=useState('')
 return <InputGroup className="mb-3">
      
        <Form.Control
          placeholder="Search..."
          value={search}
          onChange={e=>setSearch(e.target.value)}
         
        />
        <Button variant="danger" onClick={()=>{
          onSearch(search)
          setSearch('')
          }}>Search</Button>
      </InputGroup>
      
   
}
export default SearchBar