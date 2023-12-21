
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
const CustomCard = ({twit}) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <div className="d-flex align-items-center mb-3">
          <Image src={""} roundedCircle style={{ width: '40px', height: '40px' }} />
          <span className="ms-2 fw-bold">Midad{""}</span>
        </div>
        <Card.Text>{twit.destination}</Card.Text>
        <Card.Text>{twit.startDate}</Card.Text>
        <Card.Text>{twit.endDate}</Card.Text>
        <Card.Text>{twit.content}</Card.Text>
       
      </Card.Body>
    </Card>
  );
}

export default CustomCard;
