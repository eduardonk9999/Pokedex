import React, { useEffect, useState } from 'react'

// import axios from 'axios'

import { Container, CartdItem } from './style';

export default function Card() {
  const [pokemons, setPokemons] = useState([]);
  const [infosPokemons, setinfosPokemons] = useState([]);
  const [types, setTypes] = useState([]);


  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/`)
      .then(response => response.json())
      .then(data => {
        setPokemons(data.results);
      })
  }, [])


  useEffect(() => {
    let id;
    for (id = 0; id < 20; id++) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${id + 1}/`)
        .then(data => data.json())
        .then(dataPoke => {
          setinfosPokemons(dataPoke)
        })
    }
  }, [])

 

  console.log(infosPokemons)

  // setTypes(types)

  return (
    <Container>
      {pokemons.map(name => (
        <CartdItem key={name.name}>
          <h2>{name.name}</h2>
       
        </CartdItem>
      ))}
      
    </Container>
  )
}
