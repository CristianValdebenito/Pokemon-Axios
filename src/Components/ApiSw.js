import {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ApiSw = (props) => {
    const [personajes, setPersonajes] = useState([]);

    const onSubmit = (e) =>{
        e.preventDefault(); 
       console.log("hola")
    }
 
    useEffect(() => {
         //fetch('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=40')
            //.then(response => response.json())
            //.then(response => setPokemones(response.results)).catch(error=>console.log(error,"errorr"))
            axios.get('https://swapi.dev/api/people/')
            //La respuesta de axios es diferente, por que trae una estructura diferente de onjetos (por eso se agrega el .data)
            .then(response => setPersonajes(response.data.results)).catch(error=>console.log(error,"errorr"))
            //setPokemones(response.results)?offset=20&limit=40
        console.log(personajes, "personajes desde useEffect")
    }, []);
 console.log(personajes, "personajes")
    return (
        <div>
            <form onSubmit={onSubmit}>
            <button type='submit'>Axios Personajes</button>
            <ul>
            {
                personajes.length > 0 && personajes.map((per,i)=>(
                    
                        <li key={i}>
                           <Link to={`/personajes/${i+1}`}>
                                {i}{per.name}
                            </Link> 
                        </li>
               ))
            }
            </ul>
            </form>
        </div>
    );
}
export default ApiSw;
///personaje/${i}
//https://swapi.dev/api/films/1/
//https://swapi.dev/api/people/
//"https://swapi.dev/api/people/2/"
//https://swapi.dev/api/