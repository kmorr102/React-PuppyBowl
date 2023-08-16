import { useEffect, useState } from "react";
import { fetchAllPlayers } from "../API";
import { useNavigate } from "react-router-dom";
import SinglePlayer from "./SinglePlayer";

const AllPlayers = () => {
    const [players, setPlayers] = useState([]);
    const [error, setError] = useState (null);
    const navigate = useNavigate

useEffect(()=> {
    async function getAllPlayers() {
        const APIResponse= await fetchAllPlayers();
        if(APIResponse.success){
            setPlayers(APIResponse.data.players);
            
        }else{
            setError(APIResponse.error.message);
        }
        }
        getAllPlayers();
    }, []);

    const playersToDisplay = players;
    
    return (
        <>
        {playersToDisplay.map((player) => {
            return <h3 key= {player.id}>{player.name}
             <button onClick={()=>navigate('/SinglePlayer')}>Details
                </button></h3>;
        
        })}
        
        </>
    );   
};

export default AllPlayers;