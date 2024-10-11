import React from 'react'

export const ComentarioStats = ( {comentarios} ) => {

  return (
    <div className='feedback-stats'>
        {/* El numero de comentarios que hay
        en el arreglo de comentarios */}
        <h4> Comentarios:  </h4>

        {/* El promedio de Calificaciones
        de los comentarios en el arreglo
        reduce = método de arreglos
        */}
        <h4> Calificación promedio:  </h4>
    </div>
  )
}
