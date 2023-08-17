import React, { useState } from 'react';

export default function NewPlayerForm() {
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [status, setStatus] = useState("bench");
    const [imageUrl, setImageUrl] = useState("");
    const COHORT = '2305-FTB-ET-WEB-PT';
const baseUrl = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT}`;


    const handleSubmit = (event) => {
        event.preventDefault();

        const playerData = {
            name,
            breed,
            status,
            imageUrl,
            // If you're adding a Team ID, include it here
        };

        createNewPlayer(playerData)
            .then(data => {
                console.log('Success:', data);
                // Handle successful response (e.g., reset the form, show a success message, etc.)
            })
            .catch((error) => {
                console.error('Error:', error);
                // Handle errors (e.g., show an error message to the user)
            });
    }

    const createNewPlayer = async (playerData) => {
        const response = await fetch(`${baseUrl}/players`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(playerData),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
            </label>
            <label>
                Breed:
                <input type="text" value={breed} onChange={e => setBreed(e.target.value)} />
            </label>
            <label>
                Status:
                <select value={status} onChange={e => setStatus(e.target.value)}>
                    <option value="field">Field</option>
                    <option value="bench">Bench</option>
                </select>
            </label>
            <label>
                Image URL:
                <input type="text" value={imageUrl} onChange={e => setImageUrl(e.target.value)} />
            </label>
            
            <button type="submit">Create Player</button>
        </form>
    );
}
