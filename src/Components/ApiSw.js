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
            axios.get('https://swapi.dev/api/')
            //La respuesta de axios es diferente, por que trae una estructura diferente de onjetos (por eso se agrega el .data)
            .then(response => setPersonajes(response.data)).catch(error=>console.log(error,"errorr"))
            //setPokemones(response.results)?offset=20&limit=40
        console.log(personajes, "personajes desde useEffect")
    }, []);
 console.log(personajes, "personajes")
 let pers = Object.keys(personajes)
 console.log(pers, "keyssss")
    return (
        <div>
            <form onSubmit={onSubmit}>
            <button type='submit'>Axios Personajes</button>
           
            <ul>
            {
               
               pers.length > 0 && pers.map((per,i)=>(
                    
                <li key={i}>
                   <Link to={`/personajes/${per}`}>
                        {per}
                    </Link> 
                </li>



                
                
                ) )}
            </ul>
            </form>
        </div>
    );
}
export default ApiSw;

//<option value="1">Opción 1</option>
///personaje/${i}
//https://swapi.dev/api/films/1/
//https://swapi.dev/api/people/
//"https://swapi.dev/api/people/2/"
//https://swapi.dev/api/











/*
 return (
        <div>
            <form onSubmit={onSubmit}>
            <button type='submit'>Axios Personajes</button>
           
            <ul>
            {
               
               pers.length > 0 && pers.map((per,i)=>(
                    
                <li key={i}>
                   <Link to={`/personajes/${per}`}>
                        {per}
                    </Link> 
                </li>



                
                
                ) )}
            </ul>
            </form>
        </div>
    );
                        */












//RETURN CON MAP PARA FILTRAR CATEGORIA (EJ:PERSONAJES)
/*return (
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
    </div>*/


/*
    return (
        <div>
            <form>
            
           
            
            
               <select name='recursos'>
                   {
               pers.length > 0 && pers.map((per,i)=>(
                   
                 <option key={i} value={i}>   
               
                  
                        {per}
                 
                
                </option>
                ) )
               }
                </select>
                
                
            
            </form>
        </div>
    );
    */