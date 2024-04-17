import React, { useState } from 'react'

const PlayerCard = ({ player }) => {
    const [show, setShow] = useState(false)
    const tikla = () => {
        setShow(!show)

    }
    return (
        <div className="card" onClick={tikla} >
            {!show ? (<div className="img-container">
                <img src={player.img} alt="player" />
            </div>)
                : (<div className="card-info">
                    <ul className="statisticList">
                        {player.statistics.map((statistic, index) => (
                            <li key={index}>{statistic}</li>
                        ))}
                    </ul>

                </div>)

            }
            <div className="card-info-team">
            <h2>{player.name}</h2>
            <p>{player.team}</p></div>
        </div>
    )
}

export default PlayerCard