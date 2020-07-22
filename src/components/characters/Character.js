import React from 'react'

export default function Character({ character }) {
    return (
        <div className="card">
            <div className="card-inner">
                <div className="card-front">
                    <img src={character.img} alt='character portrait' />
                </div>
                <div className="card-back">
                    <h1>{character.name}</h1>
                    <ul>
                        <li><strong>Actor Name:</strong> {character.portrayed}</li>
                        <li><strong>Nickname:</strong> {character.nickname}</li>
                        <li><strong>status</strong> {character.status}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
