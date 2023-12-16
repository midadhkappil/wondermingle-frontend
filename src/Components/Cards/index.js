import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; // Correct import statement
import { NavLink } from 'react-router-dom';

const CustomCard = (props) => {
  return (
    <Card style={{ width: '18rem' }}> {/* Capitalize Card */}
      <Card.Body> {/* Capitalize Card.Body */}
        <Card.Title>{props.twit.title}</Card.Title>
        <Card.Text>
          I am going
        </Card.Text>

        <NavLink to={`/broadcast/${props.twit._id}`}> {/* Use NavLink outside Button */}
          <Button variant="primary">Join broadcast</Button>
        </NavLink>

      </Card.Body>
    </Card>
  );
}

export default CustomCard;
