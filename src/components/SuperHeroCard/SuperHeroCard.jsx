import React from 'react'
import "./SuperHeroCard.css"

function SuperHeroCard(props) {
    return (
        <div className="card">
              <img className="hero-image" src={props.sh.image.url} alt="${props.sh.name}" />
              <h2>{props.sh.name}</h2>
              <div className="statistics-container">
                <div className="powerstats">
                  <div>
                    <h3>Powerstats</h3>
                    <div className="info-container">
                      <p>Intelligence: {props.sh.powerstats.intelligence}</p>
                      <p>Strentgh: {props.sh.powerstats.strength}</p>
                      <p>Speed: {props.sh.powerstats.speed}</p>
                      <p>Durability: {props.sh.powerstats.durability}</p>
                      <p>Power: {props.sh.powerstats.power}</p>
                      <p>Combat: {props.sh.powerstats.combat}</p>
                    </div>
                  </div>
                </div>
                <div className="appereance">
                <h3>Appearance</h3>
                  <div className="info-container">
                    <p>Gender: {props.sh.appearance.gender}</p>
                    <p>Race: {props.sh.appearance.race}</p>
                    <p>Height: {props.sh.appearance.height}</p>
                    <p>Weight: {props.sh.appearance.weight}</p>
                  </div>
                </div>
              </div>
            </div>
    )
}

export default SuperHeroCard