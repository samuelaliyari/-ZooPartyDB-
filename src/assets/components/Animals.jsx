import { v4 as uuidv4 } from 'uuid';
import animals from './data/animals'
import Card from './Card';
import './Animals.scss'


const Animals = () => {
    return ( 
        <section>
            {animals.map((animal) => <Card 
            key = {uuidv4()}
            icon = {animal.emoji}
            name = {animal.name}
            species = {animal.species}
            habitat = {animal.habitat}
            diet = {animal.diet}
            lifespan = {animal.lifespan}
            funfacts = {animal.funFacts}
            />)}
        </section>
    );
}

export default Animals;