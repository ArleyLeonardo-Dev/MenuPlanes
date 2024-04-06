import {Link} from "react-router-dom"
import './styles/Inicio.css'
import { useState } from "react"
import { PlanBasic, PlanPremiun, PlanStandar } from "../assets/ListaPlanes"
import Planes from "../components/Planes"

export default function Inicio(){


    //Cambiar Color Fondo
    const planes = document.getElementsByClassName("Planes")
    const [ColorFondo, setColorFondo] = useState(false)

    function ChangeColor(){
        if (!ColorFondo){
            document.body.style.backgroundColor = 'White'
            for(let i = 0; i < planes.length; i ++){
                planes[i].style.backgroundColor = 'Whitesmoke'
                planes[i].style.color = 'Gray'
            }   
            setColorFondo(!ColorFondo)
        }else{
            document.body.style.backgroundColor = '#202020'
            for(let i = 0; i < planes.length; i ++){
                planes[i].style.backgroundColor = '#393939'
                planes[i].style.color = 'White'
            }   
            setColorFondo(!ColorFondo)
        }
    }

    //Render
    return(
        <>
            <h1 onClick={ChangeColor} style={{color:'aqua'}} >PLANES</h1>
            <div className="Contenedor">
                <Planes contenido={PlanBasic} color={'Cyan'}/>
                <Planes contenido={PlanStandar} color={'#00E676'}/>
                <Planes contenido={PlanPremiun} color={'#FFFF00'}/>
            </div>
        </>
    )
}