import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from './utils/routes'
import Button from './Button'
import { useContextGlobal } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { dispatch } = useContextGlobal();

  return (
    <nav>
      <Link to={routes.Home}>Home</Link>
      <Link to={routes.Contact}>Contact</Link>
      <Link to={routes.Favs}>Favs</Link>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <Button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>Change theme</Button>
    </nav>
  )
}

export default Navbar