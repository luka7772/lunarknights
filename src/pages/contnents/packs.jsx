import './packs.css';
import { Link } from 'react-router-dom';

export function Packs(){

    return (

     <div className="packs-container">
  
  <div className="first-pack pack">
    <p className="pack-name">Free Gym Membership</p>
    <p className="price">Free</p>
    <ul className="features-list">
      <li>&#9989;Can post photos/videos</li>
      <li>&#9989;Access to basic workouts</li>
      <li>&#9989;Join community challenges</li>
      <li>&#9989;Save your workout progress</li>
      <li>&#9989;Communicate with gym members</li>
      <li>&#9989;Level up as you complete challenges</li>
    </ul>
    <Link to="/packs" className="view-more">View more</Link>
  </div>


  <div className="basic-pack pack">
    <p className="pack-name">Basic Gym Membership</p>
    <p className="price">$5 / month</p>
    <ul className="features-list">
      <li>&#9989;Can post photos/videos</li>
      <li>&#9989;Access to basic workouts</li>
      <li>&#9989;Join community challenges</li>
      <li>&#9989;Save your workout progress</li>
      <li>&#9989;Communicate with  gym members</li>
      <li>&#9989;Level up as you complete challenges</li>
      <li>&#9989;Unlock premium workout plans</li>
      <li>&#9989;Track advanced workout stats</li>
    </ul>
    <Link to="/packs" className="view-more">View more</Link>
  </div>


  <div className="premium-pack pack">
    <p className="pack-name">Premium Gym Membership</p>
    <p className="price">$15 / month</p>
    <ul className="features-list">
      <li>&#9989;Can post photos/videos</li>
      <li>&#9989;Access to all workouts</li>
      <li>&#9989;Join community challenges</li>
      <li>&#9989;Save your workout progress</li>
      <li>&#9989;Communicate with gym members</li>
      <li>&#9989;Level up as you complete challenges</li>
      <li>&#9989;Unlock premium workout plans</li>
      <li>&#9989;Track advanced workout stats</li>
      <li>&#9989;Personalized workout plans</li>
      <li>&#9989;Priority support</li>
    </ul>
    <Link to="/packs" className="view-more">View more</Link>
  </div>
</div>

    );
}