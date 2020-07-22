import React from 'react'
import Character from './Character'
import Loading from '../ui/Loading'

export default function CharacterGrid({characters,isLoading}) {
    return isLoading ? (<Loading/>):(
    <section className='cards'>
        {characters.map(character =>(
            <Character key={character.char_id} character={character}/>
        ))}
    </section>)
}
