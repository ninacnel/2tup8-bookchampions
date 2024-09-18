import React from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate();

    const backHomeHandler = () =>{
        navigate('/');
    }

  return (
    <div>
        <h2>Pagina no encotrada</h2>
        <Button onClick={backHomeHandler}>Volver al inicio</Button>
    </div>
  )
}

export default NotFound