
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { Button } from 'react-bootstrap';
import { createFollowRequest } from 'Pages/Followers/api';
const CustomCard = ({twit}) => {

  const onClickFollow = async () => {
    const response = await createFollowRequest({
      recipient: twit.user._id
      
    })
  }

  return (
    <Card className="mb-3">
      <Card.Body>
        <div className="d-flex align-items-center mb-3">
          <Image src={""} roundedCircle style={{ width: '40px', height: '40px' }} />
          <span className="ms-2 fw-bold">{twit?.user?.username}</span>
        </div>
        <Card.Text>{twit.destination}</Card.Text>
        <Card.Text>{twit.startDate}</Card.Text>
        <Card.Text>{twit.endDate}</Card.Text>
        <Card.Text>{twit.content}</Card.Text>
        <Button onClick={onClickFollow}>Follow</Button>
       
      </Card.Body>
    </Card>
  );
}

export default CustomCard;
