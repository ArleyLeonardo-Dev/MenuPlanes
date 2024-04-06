import './styles/Planes.css'
import { Link } from 'react-router-dom'

export default function Planes({ contenido, color }) {

    const lista = contenido.descripcion.map(x => <li key={x.id} style={{ marginBottom: '5px' }}>{x.punto}</li>)

    return (
        <div className="Planes">
            <div className='HeadPlan' style={{backgroundColor:color}}>
                <h1>{contenido.nombre}</h1>
            </div>
            <div className="ContentPlan">
                <h2 className='h2' style={{borderColor:color}}>{contenido.precio}</h2>
                <ul>{lista}</ul>
                <Link className="Link" style={{backgroundColor:color}} to={contenido.enlace}>Obtener plan {contenido.nombre}</Link>
                <h6>{contenido.informacion}</h6>
            </div>
        </div>
    )
}   