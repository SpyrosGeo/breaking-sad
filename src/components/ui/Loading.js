import React from 'react'
import spinner from '../../img/spinner.gif'
export default function Loading() {
    return (
            <img style={{width:'200px',margin:'auto',display:"block"}} src={spinner} alt='loading'/>
    )
}
