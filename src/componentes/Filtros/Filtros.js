import React from 'react';
import { Button, Container, Form } from './styled';
const Filtros = () => {
  return (
    <Container>
      <h1>Filtros</h1>
      <Form>
        <label for="valorMin">Valor mínimo</label>
        <input id="valorMin" type="number" placeholder="Valor mínimo" />
        <label for="valorMax">Valor máximo</label>
        <input id="valorMax" type="number" placeholder="Valor maximo" />
        <label for="busca">Buscar</label>
        <input id="busca" type="text" placeholder="Busca por nome" />
        <Button>Buscar</Button>
      </Form>
    </Container>
  )
}
export default Filtros;