import './endinfo.css';

export function Endinfo() {
  const base = import.meta.env.BASE_URL;

  return (
    <div className="main-section">
      <div className="left-section">
        <div className="name">
          <img src={`${import.meta.env.BASE_URL}vite.jpg`} className="main-logo" alt="Logo" />
          Lunar Knights
        </div>
        <p className="description">
          Save your progress, complete challenges, share your experience with others, get personalized workouts and meals.
        </p>
      </div>

      <div className="middle-section">
        <p className="follow-us-title">Follow Us</p>
        <div className="social-links">
          <a href="https://www.instagram.com/lukach0777/" target="_blank">
            <img src={`${base}images/instagram.jpg`} className="social-logo" alt="Instagram" />
          </a>

          <a href="https://www.facebook.com/luka.jijavadze.387368" target="_blank">
            <img src={`${base}images/facebook.jpg`} className="social-logo" alt="Facebook" />
          </a>

          <a href="https://discord.com/users/770907116974243850" target="_blank">
            <img src={`${base}images/discord.png`} className="social-logo" alt="Discord" />
          </a>
        </div>
      </div>

      <div className="right-section">
        <p className="contact-title">Contact</p>
        <p className="hours">Monday-Sunday: 9:00 AM - 9:00 PM</p>
        <p className="email">Email: jijavadze_luka@mail.ru</p>
        <p className="phone">Phone: +123 456 789</p>
      </div>
    </div>
  );
}
