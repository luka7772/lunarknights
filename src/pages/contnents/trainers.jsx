import './trainers.css';

export function TrainerCard({ name, phone, specialty, classes, description }) {
  return (
    <div className="trainer-block">
      <div className="trainer-header">
        <h2 className="trainer-name">{name}</h2>
        <span className="trainer-specialty-badge">{specialty}</span>
      </div>
      
      <div className="trainer-body">
        <div className="info-item">
          <span className="label">PRIMARY CLASSES</span>
          <span className="value">{classes}</span>
        </div>
        
        <div className="info-item">
          <span className="label">DIRECT LINE</span>
          <span className="value">{phone}</span>
        </div>

        <div className="trainer-bio">
          <p>{description}</p>
        </div>
      </div>

      <div className="trainer-footer">
        <button className="contact-action-btn">BOOK CONSULTATION</button>
      </div>
    </div>
  );
}