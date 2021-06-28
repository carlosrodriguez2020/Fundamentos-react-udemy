import React,{useState} from 'react'

function Contador(props) {

const [contador, setContador]=useState(props.inicial);

const Aumentar = ()=>{setContador(contador+1)}  
const Disminuir = ()=>{setContador(contador-1)}




    return (
        <div>
            <h1>Contador:{contador}</h1>
            <hr />
            <button onClick={Aumentar}>Aumentar</button>

            <button onClick={Disminuir}>Disminuir</button>
        </div>
    )
}

export default Contador
