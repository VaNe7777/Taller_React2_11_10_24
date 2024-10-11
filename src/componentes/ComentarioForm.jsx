import {React , useState} from 'react'
import Card from './Card' 
import ComentarioCalificacion from './ComentarioCalificacion'



export const ComentarioForm = () => {

    const [ text , setText ] = useState ('')

    const handleTextChange = (e) => {
        setText(e.target.value)
    }




  return (
    <Card>
        <form action="">
            < ComentarioCalificacion />
            <div className='input-group'>
                <input type="text" 
                    value = { text }
                    onChange= { handleTextChange } 
                    placeholder='Ingrese su comentario aquí' />
                
                <button>
                    Guardar
                </button>
            </div>
        </form>
    </Card>
  )
}

export default ComentarioForm