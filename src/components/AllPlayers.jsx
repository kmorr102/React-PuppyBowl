import { useEffect, useState } from "react";
import { fetchAllPlayers } from "../API";

const AllPlayers = () => {
    const [players, setPlayers] = useState([]);
    const [error, setError] = useState (null);
    const [searchParam, setSearchParam] = useState("");

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
            return <h3 key = {player.id}>{player.name}</h3>;
        })}
        </>
    );   
};

export default AllPlayers;