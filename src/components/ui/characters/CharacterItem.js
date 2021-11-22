import React from 'react'

function CharacterItem({item}){
    return(
        <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.img} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Nickname:</strong> {item.nickname}
            </li>
            <li>
              <strong>Participou da temporada:</strong> {item.appearance}
            </li>
            <li>
              <strong>Nome do Ator(a):</strong> {item.portrayed}
            </li>
          </ul>
        </div>
      </div>
    </div>
    )
}

export default CharacterItem