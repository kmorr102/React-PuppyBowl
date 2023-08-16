import { useState, useEffect } from "react";
import { fetchSinglePlayer } from "../API";
import { useParams } from "react-router-dom";

const SinglePlayer = () => {
    const[player,setPlayer]=useState('');
    const[error,setError]=useState(null);
    const[searchParam, setSearchParam] = useState("");
    const {id}=useParams();
    console.log(player)
    useEffect(()=>{
        async function GetSinglePlayer(){
            try {  
                const response=await fetchSinglePlayer(id);
                const result= await response.data.players();
                setPlayer(result);
                
            } catch (error) {
                console.log(error.message);
            }
        }
        GetSinglePlayer()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
 

  
}
 
export default SinglePlayer;