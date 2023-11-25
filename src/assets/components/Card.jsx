import { lazy } from 'react';
import { v4 as uuidv4 } from 'uuid';


const Card = (props) => {
    return ( 
        <article>
            <div>
                <h2>{props.icon}</h2>
                <h3>{props.name}</h3>
                <p>{props.species}</p>
                <p>{props.habitat}</p>
                <p>{props.diet}</p>
                <p>{props.lifespan} years</p>
            </div>
            <div>
                <ul>
                    {props.funfacts.map((fact) =>
                        <li
                            key = {uuidv4()}
                        >{fact}</li>
                    )}
                </ul>
            </div>
        </article>
    )
}

export default Card;