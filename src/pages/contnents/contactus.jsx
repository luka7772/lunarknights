import './contactus.css';

export function ContactUs() {
  const base = import.meta.env.BASE_URL;

  return (
    <div className="contact-us-main">
      <div className="contact-left-section">
        <div className="contact-title">Get in Touch with Us</div>
        <p className="contact-description">
          We're here to help you! Fill out the form below, or contact us directly through our social channels.
        </p>

        <div className="contact-form">
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
            
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      <div className="contact-middle-section">
        <p className="social-title">Follow Us on Social Media</p>
        <div className="social-links">
          <a href="https://www.instagram.com/lukach0777/" target="_blank" rel="noopener noreferrer">
            <img src={`${base}images/instagram.jpg`} className="social-logo" alt="Instagram" />
          </a>

          <a href="https://www.facebook.com/luka.jijavadze.387368" target="_blank" rel="noopener noreferrer">
            <img src={`${base}images/facebook.jpg`} className="social-logo" alt="Facebook" />
          </a>

          <a href="https://discord.com/users/770907116974243850" target="_blank" rel="noopener noreferrer">
            <img src={`${base}images/discord.png`} className="social-logo" alt="Discord" />
          </a>
        </div>
      </div>

      <div className="contact-right-section">
        <p className="contact-info-title">Contact Information</p>
        <p className="contact-hours">Monday-Sunday: 9:00 AM - 9:00 PM</p>
        <p className="contact-email">Email: jijavadze_luka@mail.ru</p>
        <p className="contact-phone">Phone: +123 456 789</p>
        <p className="contact-location">Location: 123 Fitness St., Gym City</p>
      </div>
    </div>
  );
}
