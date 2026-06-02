import { TrainerCard } from './contnents/trainers';
import './contnents/trainers.css';

export function TrainersPage() {
  const trainers = [
    {
      name: "MARCUS STONE",
      phone: "+1 (555) 019-8822",
      specialty: "STRENGTH ARCHITECT",
      classes: "Barbell Mastery, Powerlifting",
      description: "Marcus utilizes a biomechanical approach to strength. With 12 years of coaching elite athletes, he specializes in building absolute force production and structural integrity."
    },
    {
      name: "ELENA VANCE",
      phone: "+1 (555) 019-4455",
      specialty: "MOBILITY SPECIALIST",
      classes: "Zen Flow, Structural Alignment",
      description: "Elena focuses on the fluid dynamics of the human body. Her sessions blend modern kinesiology with traditional yoga to unlock range of motion and prevent injury."
    },
    {
      name: "JAX THORNE",
      phone: "+1 (555) 019-2233",
      specialty: "METABOLIC ENGINEER",
      classes: "Turbo Burn, HIIT, Cardiac Output",
      description: "Jax manages the high-intensity conditioning department. His protocols are designed for maximum caloric expenditure and peak cardiovascular performance."
    }
  ];

  return (
    <div className="trainers-page">
      <div className="page-header">
        <h1 className="main-title">ELITE <span>COACHES</span></h1>
        <p>Architects of performance, dedicated to your transformation.</p>
      </div>
      
      <div className="trainers-grid">
        {trainers.map((t, i) => (
          <TrainerCard key={i} {...t} />
        ))}
      </div>
    </div>
  );
}