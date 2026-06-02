import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

export function ServiceCard({ title, description, icon, path }) {
  return (
    <div className="service-card">
      <div className="card-glow"></div>
      <div className="icon-wrapper">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="card-footer">
        <Link to={path} className="service-cta">Learn More</Link>
      </div>
    </div>
  );
}