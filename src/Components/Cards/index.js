import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import Userpic from 'Assets/Images/user1.jpeg' 

const CustomCard = (props) => {
  return (
    <Card style={{ width: '68.5rem' }}>
      <Card.Body>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '10px' }}>
  <img src={Userpic} alt="Profile" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
  <span style={{ marginLeft: '5px', fontSize: '12px', fontWeight: 'bold' }}>{props.twit.username}</span>
  <ul style={{ listStyleType: 'none', padding: 0, fontSize: '12px', marginTop: '5px' }}>
    <li><h1 style={{ fontSize: '12px', margin: '5px 0' }}>Anshiq</h1></li>
    <li><h1 style={{ fontSize: '12px', margin: '5px 0' }}>Destination: Switzerland</h1></li>
    <li><h1 style={{ fontSize: '12px', margin: '5px 0' }}>Starting date: 18/12/23</h1></li>
    <li><h1 style={{ fontSize: '12px', margin: '5px 0' }}>Ending date: 03/01/24</h1></li>
  </ul>
</div>


        <Card.Title>{props.twit.title}</Card.Title>
        <Card.Text>
          "Excited about planning a trip to Switzerland! 🇨🇭 Looking for an adventure buddy who shares a love for hiking and exploring the great outdoors. Let's make this trip an unforgettable adventure together! #TravelCompanion #HikingAdventures 🏞️✨"
        </Card.Text>

        <NavLink to={`/broadcast/${props.twit._id}`}>
          <Button variant="primary">Join broadcast</Button>
        </NavLink>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;
