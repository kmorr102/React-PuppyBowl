export default function NewPlayerForm(){
    function handleSubmit(event) {
        event.preventDefault();
    }
    return (  
        
        <form action="post" onSubmit={handleSubmit}>
            <label>
                ID: <input type="text" defaultValue="" />
            </label>
            <label>
                Name: <input type="text" defaultValue="" />
            </label>
            <label>
                Breed: <input type="text"defaultValue="" />
            </label>
            <label>
                Status: <input type="text" defaultValue="" />
            </label>
            <label>
                TeamID: <input type="text" defaultValue="" />
            </label>
        <button type="submit">Submit Form</button>
        </form>
        
    );
}
