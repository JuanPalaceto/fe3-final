import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from './utils/routes'
import Button from './Button'
import { useContextGlobal } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state,  dispatch } = useContextGlobal();

  return (
    <nav>
      <Link to={routes.Home} className={state.theme}>Home</Link>
      <Link to={routes.Contact} className={state.theme}>Contact</Link>
      <Link to={routes.Favs} className={state.theme}>Favs</Link>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <Button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>Change theme</Button>
    </nav>
  )
}

export default Navbar