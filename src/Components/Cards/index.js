
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { Button, Col, Row } from 'react-bootstrap';
import ProfilePicPlaceholder from 'Components/ProfilePicPlaceholder';
import { RiMapPinLine } from "react-icons/ri";
import { LiaPlaneDepartureSolid } from "react-icons/lia";
import { LiaPlaneArrivalSolid } from "react-icons/lia";



import moment from 'moment';
import FollowButton from 'Components/FollowButton';

const CustomCard = ({ twit, onClickCancelFollowRequest, followRequests, onClickFollow }) => {



  return (
    <Card className="mb-3">
      <Card.Body>
        <div className="d-flex align-items-center mb-3">
          <Row className="align-items-center gx-3">
            <Col>
              {twit.user.profilePicture ? (
                <Image src={twit.user.profilePicture} roundedCircle style={{ width: '40px', height: '40px' }} />
              ) : <ProfilePicPlaceholder name={twit.user.username} />}
            </Col>
            <Col>
              <span className="fw-bold text-capitalize">{twit?.user?.username}</span>
            </Col>
            <Col>
              <FollowButton onClickFollow={onClickFollow} userId={twit.user._id} onClickCancelFollowRequest={onClickCancelFollowRequest} followRequests={followRequests} />
            </Col>
          </Row>
        </div>
        <Card.Text>{twit.content}</Card.Text>
        <Row className="align-items-center justify-content-between border-top pt-3">
          <Col className="text-center">
            <div className="d-flex flex-column align-items-center">
              <RiMapPinLine className="mb-2" size={22} />
              <span>{twit.destination}</span>
            </div>
          </Col>
          <Col className="text-center">
            <div className="d-flex flex-column align-items-center">
              <LiaPlaneDepartureSolid className="mb-2" size={22} />
              <span>{moment(twit.startDate).format('MMMM Do YYYY')}</span>
            </div>
          </Col>
          <Col className="text-center">
            <div className="d-flex flex-column align-items-center">
              <LiaPlaneArrivalSolid className="mb-2" size={22} />
              <span>{moment(twit.endDate).format('MMMM Do YYYY')}</span>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;
