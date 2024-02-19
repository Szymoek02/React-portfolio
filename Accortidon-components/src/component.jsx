import { useState } from 'react'
import data from './data.json'
import './component.css'

export default function Accorditon()
{
    const[singleSelected, setSingleSelected] = useState(null)
    const[enableMultiSelect, setEnableMultiSelect] = useState(false)
    const[multiSelected, setMultiSelected] = useState([])

    const selected = id => {
        return ((enableMultiSelect && multiSelected.indexOf(id) !== -1) || (!enableMultiSelect && singleSelected === id))
    }

    return(
        <>
        <button className="toggle" onClick={() => {setEnableMultiSelect(!enableMultiSelect)}}>{(enableMultiSelect) ? 'Disable' : 'Enable'} multiple selection</button>
        {data.map(d => {
            return(
                <div key={d.id} className="component">
                    <p className="title">
                        <span>{d.title}</span>
                        <button className="wrap" onClick={() => {
                            if(enableMultiSelect)
                            {
                                let copy = [...multiSelected]
                                let i = copy.indexOf(d.id)
                                if(i === -1) copy.push(d.id)
                                else copy.splice(i, 1)
                                setMultiSelected(copy)
                            }
                            else setSingleSelected((d.id === singleSelected) ? null : d.id)
                        }}>{selected(d.id) ? '-' : '+'}</button>
                    </p>
                    {selected(d.id) ? <div className="wrapper">{d.content}</div> : null}
                </div>
            )
        })}
        </>
    )    
}