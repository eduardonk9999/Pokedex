import React from 'react'

import logo from '../../assets/logo.svg'

import { Container} from './style';

import Search from '../../Components/Search'
import Card from '../../Components/Card'

export default function Home() {
  return (
    <Container>
      <img src={logo} alt="Pokedex"/>
      <Search />
      <Card />
    </Container>
  )
}
