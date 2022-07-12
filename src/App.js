import { useState } from 'react';
import './App.css';
import React from 'react';



//prueba de push
function App() {

  const [numero, setNumero]= useState(0)

 const sumar=()=>{
setNumero((prevState) => (numero +1))
 }

  const restar=()=>{
setNumero((prevState) => (numero - 1))
  

  
 }

  return (
    <>

    <div> Contador 
    <p>
      el estado es: {numero}
    </p>
    <button onClick={sumar} >+</button>
    <button onClick={restar} >-</button>
    </div>
    </>



  );
}



export default App;
