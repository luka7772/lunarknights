import './exercisestypes.css';
import { Link } from 'react-router-dom';

export function Exercisestypeslist (){

    return (

       <>
        
        <Link to="/workouts/chest" className="exercise">
            <div className="exercise-image">
                <img src={`${import.meta.env.BASE_URL}exerciseimages/chest.jpg`} alt="Chest workout" />
            </div>
            <div className="exercise-type">
                Chest
            </div>
        </Link>



         <Link to="/workouts/abs" className="exercise">
            <div className="exercise-image">
                <img src={`${import.meta.env.BASE_URL}exerciseimages/abs.jpg`} alt="Chest workout" />
            </div>
            <div className="exercise-type">
                ABS
            </div>
        </Link>


         <Link to="/workouts/biceps" className="exercise">
            <div className="exercise-image">
                <img src={`${import.meta.env.BASE_URL}exerciseimages/biceps.jpg`} alt="Chest workout" />
            </div>
            <div className="exercise-type">
                Biceps
            </div>
        </Link>

        <Link to="/workouts/calves" className="exercise">
            <div className="exercise-image">
                <img src={`${import.meta.env.BASE_URL}exerciseimages/calves.jpg`} alt="Chest workout" />
            </div>
            <div className="exercise-type">
                Calves
            </div>
        </Link>

        <Link to="/workouts/forearm" className="exercise">
            <div className="exercise-image">
                <img src={`${import.meta.env.BASE_URL}exerciseimages/forearms.jpg`} alt="Chest workout" />
            </div>
            <div className="exercise-type">
                Forarms
            </div>
        </Link>


       <Link to="/workouts/glutes" className="exercise">
            <div className="exercise-image">
                <img src={`${import.meta.env.BASE_URL}exerciseimages/glutes.jpg`} alt="Chest workout" />
            </div>
            <div className="exercise-type">
                Glutes
            </div>
        </Link>


        <Link to="/workouts/hamstrings" className="exercise">
            <div className="exercise-image">
                <img src={`${import.meta.env.BASE_URL}exerciseimages/hamstrings.jpg`} alt="Chest workout" />
            </div>
            <div className="exercise-type">
                Hamstrings
            </div>
        </Link>
       


         <Link to="/workouts/hipflexors" className="exercise">
            <div className="exercise-image">
                <img src={`${import.meta.env.BASE_URL}exerciseimages/hipflexors.jpg`} alt="Chest workout" />
            </div>
            <div className="exercise-type">
                Hipflexors
            </div>
        </Link>

 
            
           
       <Link to="/workouts/lats" className="exercise">
            <div className="exercise-image">
                <img src={`${import.meta.env.BASE_URL}exerciseimages/lats.jpg`} alt="Chest workout" />
            </div>
            <div className="exercise-type">
                Lats
            </div>
        </Link>


        <Link to="/workouts/lowerback" className="exercise">
            <div className="exercise-image">
                <img src={`${import.meta.env.BASE_URL}exerciseimages/lowerback.jpg`} alt="Chest workout" />
            </div>
            <div className="exercise-type">
                Lower Back
            </div>
        </Link>
       


         <Link to="/workouts/neck" className="exercise">
            <div className="exercise-image">
                <img src={`${import.meta.env.BASE_URL}exerciseimages/neck.jpg`} alt="Chest workout" />
            </div>
            <div className="exercise-type">
                Neck
            </div>
        </Link>
 

 
             <Link to="/workouts/obliques" className="exercise">
            <div className="exercise-image">
                <img src={`${import.meta.env.BASE_URL}exerciseimages/obliques.jpg`} alt="Chest workout" />
            </div>
            <div className="exercise-type">
                Obliques
            </div>
        </Link>


           <Link to="/workouts/palm" className="exercise">
            <div className="exercise-image">
                <img src={`${import.meta.env.BASE_URL}exerciseimages/palmarfaqsia.jpg`} alt="Chest workout" />
            </div>
            <div className="exercise-type">
                Palm
            </div>
        </Link>


           <Link to="/workouts/quads" className="exercise">
            <div className="exercise-image">
                <img src={`${import.meta.env.BASE_URL}exerciseimages/quads.jpg`} alt="Chest workout" />
            </div>
            <div className="exercise-type">
                Quads
            </div>
        </Link>



           <Link to="/workouts/shoulder" className="exercise">
            <div className="exercise-image">
                <img src={`${import.meta.env.BASE_URL}exerciseimages/shoulders.jpg`} alt="Chest workout" />
            </div>
            <div className="exercise-type">
                Shoulders
            </div>
        </Link>




           <Link to="/workouts/traps" className="exercise">
            <div className="exercise-image">
                <img src={`${import.meta.env.BASE_URL}exerciseimages/traps.jpg`} alt="Chest workout" />
            </div>
            <div className="exercise-type">
                Traps
            </div>
        </Link>



           <Link to="/workouts/triceps" className="exercise">
            <div className="exercise-image">
                <img src={`${import.meta.env.BASE_URL}exerciseimages/triceps.jpg`} alt="Chest workout" />
            </div>
            <div className="exercise-type">
                Triceps
            </div>
        </Link>



           <Link to="/workouts/upperback" className="exercise">
            <div className="exercise-image">
                <img src={`${import.meta.env.BASE_URL}exerciseimages/upperback.jpg`} alt="Chest workout" />
            </div>
            <div className="exercise-type">
                Upper Back
            </div>
        </Link>






        </>
    )
}