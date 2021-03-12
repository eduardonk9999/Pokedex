import React, { useEffect, useState } from 'react'

// import axios from 'axios'

import { Container, CartdItem } from './style';

export default function Card() {
  const [pokemons, setPokemons] = useState([]);
  const [infosPokemons, setinfosPokemons] = useState([]);
  // const [types, setTypes] = useState([]);


  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/`)
      .then(response => response.json())
      .then(data => {
        setPokemons(data.results)

        data.results.map(names => {
          // console.log(names.url)
          fetch(`${names.url}`)
            .then(data => data.json())
            .then(dataPoke => {
              setinfosPokemons(dataPoke)
            })
        })
      })
  }, [])


  // useEffect(() => {
  //   let id;
  //   for (id = 0; id < 20; id++) {
  //     fetch(`https://pokeapi.co/api/v2/pokemon/${id + 1}/`)
  //       .then(data => data.json())
  //       .then(dataPoke => {
  //         dataPoke.types.map(typesInfos => (
  //           console.log(typesInfos.type.name)
  //           // setinfosPokemons()
  //         ))
  //       })
  //   }
  // }, [])






  // setTypes(types)

  return (
    <Container>
      {pokemons.map(namePok => (
        <CartdItem>
          <h2>{namePok.name}</h2>
          <span>{console.log(infosPokemons.types)}</span>
        </CartdItem>
      ))}
      
    </Container>
  )
}
