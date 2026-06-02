import React from 'react';
import { ServiceCard } from "./contnents/ServiceCard"; 
import './Servicepage.css';

function ServicePage() {
  const services = [
    { title: "Personal Training", description: "Elite 1-on-1 coaching to push your limits.", icon: "⚡", path: "/workouts/chest" },
    { title: "Group Classes", description: "High-intensity sessions to build strength.", icon: "🔥", path: "/workouts/abs" },
    { title: "Nutrition Coaching", description: "Science-based meal plans for recovery.", icon: "🥗", path: "/contact" },
    { title: "Online Training", description: "Digital programming for training anywhere.", icon: "💻", path: "/workouts" }
  ];

  return (
    <div className="service-page">
      <header className="service-header">
        <h1>Our Premium Services</h1>
        <p>Elevate your potential with our expert-led fitness solutions.</p>
      </header>
      <div className="service-list">
        {services.map((s, i) => (
          <ServiceCard key={i} title={s.title} description={s.description} icon={s.icon} path={s.path} />
        ))}
      </div>
    </div>
  );
}

export default ServicePage;