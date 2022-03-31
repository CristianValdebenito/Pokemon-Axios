import React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Personaje = () => {
    console.log(useParams())
    const {id} = useParams()
    console.log(id)
    const [personaje, setPersonaje] = useState([]);
    useEffect(() => {
        //fetch('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=40')
           //.then(response => response.json())
           //.then(response => setPokemones(response.results)).catch(error=>console.log(error,"errorr"))
           axios.get(`https://swapi.dev/api/people/${id}`)
           //La respuesta de axios es diferente, por que trae una estructura diferente de onjetos (por eso se agrega el .data)
           .then(response => setPersonaje(response.data)).catch(error=>console.log(error,"errorr"))
           //setPokemones(response.results)?offset=20&limit=40
       console.log(personaje, "personajes desde useEffect")
   }, []);
    
    return (
        <div>
            <h3>{personaje.name}</h3>
        </div>
    );
}

export default Personaje;
