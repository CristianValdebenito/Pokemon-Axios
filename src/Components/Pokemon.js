import {useEffect, useState} from 'react';
import axios from 'axios';
const Pokemon = (props) => {
    const [pokemones, setPokemones] = useState([]);

    const onSubmit = (e) =>{
        e.preventDefault(); 
       console.log("hola")
    }
 
    useEffect(() => {
         //fetch('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=40')
            //.then(response => response.json())
            //.then(response => setPokemones(response.results)).catch(error=>console.log(error,"errorr"))
            axios.get('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=807')
            //La respuesta de axios es diferente, por que trae una estructura diferente de onjetos (por eso se agrega el .data)
            .then(response => setPokemones(response.data.results)).catch(error=>console.log(error,"errorr"))
            //setPokemones(response.results)?offset=20&limit=40
        console.log(pokemones, "pokemones desde useEffect")
    }, []);
 //console.log(pokemones, "pokemones")hhhhhhhhh
    return (
        <div>
            <form onSubmit={onSubmit}>
            <button type='submit'>Axios Pokemon</button>
            
            {pokemones.length > 0 && pokemones.map((pok, index)=>
               (<div key={index}>{pok.name}</div>)
            )}
            </form>
        </div>
    );
}
export default Pokemon;

//https://pokeapi.co/api/v2/

//Return con filter:
/*return (
    <div>
        <form onSubmit={onSubmit}>
        <button type='submit'>Fetch Pokemon</button>
        {pokemones.length > 0 && pokemones.filter((poke,i)=>i===0).map((pok, index)=>
            (<div key={index}>{pok.name}</div>)
        )}
        </form>
    </div>
);*/
