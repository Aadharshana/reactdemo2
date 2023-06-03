
//import Card1 from './Card1'
/*import {useState,useEffect} from 'react';
import axios from 'axios';

const Cards=(props)=>{
    const [name,setName]=useState('react')
    console.log("props",props)
    const updateName=(value)=>{
        setName(value)
    }
    /*useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            `http://hn.algolia.com/api/v1/search?query=${name}`,
          );
    
          setData(result.data);
        };
    
        fetchData();
      }, []);
      function Cards() {
        const url = "https://jsonplaceholder.typicode.com/users";
        const [data, setData] = useState([]);
      
        const fetchInfo = () => {
          return axios.get(url).then((res) => setData(res.data));
        };
      
        useEffect(() => {
          fetchInfo();
        }, []);
    return (
        <>
        <h1>I am a card{props.name}{name}</h1>
        <button onClick={()=>setName('js')
        }>name set
        </button>
        <button onClick={()=>updateName('react..js')
        }>name update
        </button>
        
        </>
    )
}
export default Cards;*/
import axios from "axios"
 import{useState} from "react"
 const Card=(props)=>{
    const[name,setName]=useState([])
    const GetData=async()=>{
        const data=await axios.get('https://jsonplaceholder.typicode.com/photos')
        console.log('data',data.data)
        setName(data.data)

    }
    return(
        <>
        <button onClick={()=>GetData()}>Get Data</button>
        {/*<p>{JSON.stringify(name)}</p>*/}
        {
            name.map((value)=>{return<p>{value.title}</p>})
        }
        <input type="text" onChange={(e)=>console.log(e.target.value)}/>
        </>
    )
 }
 export default Card