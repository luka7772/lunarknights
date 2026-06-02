import { exercises } from "./contnents/workoutslist";
import './chestpage.css'

export function Exercisesdisplay({type}) {
    return (
        <div className="main-container" >
            {exercises
                .filter(exercise => exercise.type === type) 
                .map((exercise) => {
                    const { name, image, stars, description } = exercise; 
                    return (
                        <div className="curent-exercise" key={name}> 
                            <div className="curent-exercise-image">
                                <img src={image} alt={`${name} workout`} /> 
                            </div>
                            <div className="exercise-description">
                                <p>Stars: {stars} &#9733;</p>
                                <p className="exercise-name">{name}</p>
                                <p className="exercise-whole-description">{description}</p>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
}
