import React, { useEffect } from 'react'
import Swal from 'sweetalert2';

export const AlertImg = () => {

    const showAlert = () => {
        Swal.fire({
            title: 'Bienvenido!',
            text: 'Por el momento, la carga y subida de imagenes esta deshabilitada debido al desarrollo del Back-End en producción. Las demás funcionalidades responden correctamente!!!',
            icon: 'info',
            confirmButtonText: 'Cerrar',
            confirmButtonColor: '#4dbad8'
          });
    };
    
    useEffect(() => {
      showAlert()
    }, [])
    
  return (
    <></>
  )
}


