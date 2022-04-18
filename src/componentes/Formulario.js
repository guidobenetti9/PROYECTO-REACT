import React from 'react'
import { useState} from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { db } from "../firebase";
import { toast } from 'react-toastify';
import { Container, Row , Col} from 'react-bootstrap';

const Formulario = () => {


    const orden = {
            nombre : '',
            email : '',
            telefono : ''
    }

    const [user, setUser] = useState(orden)
    const capturarInput = (e) => {
        const {name, value} = e.target
        setUser({...user,[name] : value})
    }


    const guardarOrden = async(e) => { 
        e.preventDefault()
        try {
            await addDoc(collection(db,'ordenes' ),  {
                ...user
            })
            toast.success("Pedido realizado con exito!")
        } catch (error) {
            toast.error("Error al realizar el pedido")
        }
        setUser({...orden})
    }

  return (

    <Container fluid >
        <Row> 
            <Col >
                <form onSubmit={guardarOrden} className='formulario'>
                    <h2>Formulario de compra</h2>
                    <input type="text" name="nombre" placeholder='Ingrese Nombre' onChange={capturarInput} value={user.nombre}/>
                    <input type="text" name="email" placeholder='Ingrese Email' onChange={capturarInput} value={user.email}/>
                    <input type="text" name="telefono" placeholder='Ingrese Telefono' onChange={capturarInput} value={user.telefono}/>
                    <button onClick={guardarOrden}>enviar</button>
                </form>
            </Col>

        </Row>

    </Container>


  )
}

export default Formulario