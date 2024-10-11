import {React, useState} from 'react'
import Header from './componentes/Header';
import ComentarioItem from './componentes/ComentarioItem';
import comentarios from './data/Comentarios';
import ComentarioLista from './componentes/ComentarioLista';
import Card from './componentes/Card';
import { ComentarioStats } from './componentes/ComentarioStats';
import ComentarioForm from './componentes/ComentarioForm';



function App() {

    // Función Global (estado para los comentarios)

    const [comments, 
        setComments] = useState(comentarios)

    const titulo = "App de Comentarios";
    const Autor = "Linda Guerrero"

    const ficha = "2902093"
    const centro = "CGMLTI"

    
    


    // Función Flecha (borar item)

    const borrarItem = id =>{
        if (window.confirm
            ("Está seguro de borrar el comentario?")){
            
            // Asignar nuevo estado a comments:
            // filter: para quitar los comentarios
            // cuyo id concuerde con el parametro

            setComments (comments.filter((c) => c.id !== id ))
        }
    }





    // Comentarios opcionales / Componentes
    const loading = false ;
    if (loading === true) return (<h1>Cargando comentarios...</h1>)

  return (
    <div className='container'>
        <Header 
            titulo= {titulo}  
            autor = {Autor} 
            ficha= {ficha} 
            centro= {centro}
        /> 


        <ComentarioForm />


        <ComentarioStats comentarios = {comments} />    


        <ComentarioLista 
            comments={comments} 
            handleDelete ={borrarItem}/>

        <Card reverse = {true}>
            <p> Hola </p>
        </Card>         
    </div>
    
  )
}

export default App