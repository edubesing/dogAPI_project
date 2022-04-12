import React, { useEffect, useState, useRef } from "react";
import axios from 'axios';

function AddDogs() {

    const [dogs, setDogs] = useState([]);
    const [click, setClick] = useState(0);
    const initialMount = useRef(true);
  
    useEffect(() => {
        if(initialMount.current){
            initialMount.current = false;
        } else{
          axios.get('https://api.thedogapi.com/v1/images/search?limit=8&order=RAND', {
          method: 'GET',
          headers: {  
            'x-api-key': '2d7f1333-8853-4e28-a48c-04209802b01d'
          }
        }).then(resposta => {
          setDogs(dogs.concat(resposta.data))

        })
          .catch(err=>console.log(err));
        }
        
    }, [click]);
  
    return ( 
      <div>
        <div>
          <div className='images'>{dogs.map(dog => <img className="resultado" key={dog.id} alt='foto de um cachorrinho' src={dog.url}></img>)}</div>
        </div>
        <p className='mostrar-mais'>Mostrar Mais!</p>
        <div className='addImg'>
          <button onClick={()=>setClick(prevClick => prevClick+1)}>
            <img src="assets/arrowDown.png" alt="Botão para mostrar mais fotos de cachorros"/>
          </button>
        </div>
      </div>
    );
  }
  
  export default AddDogs;