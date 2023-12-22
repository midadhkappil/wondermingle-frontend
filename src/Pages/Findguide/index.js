import React from 'react';
import { Container, Row, Col, Button, Dropdown, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductItem = ({ name, description, image, isNew }) => {
  return (
    <div className="product-list col-xs-12">
      <Card>
        {isNew && (
          <div className="sale-tag">
            <span>SALE</span>
          </div>
        )}
        <Card.Img variant="top" src={image} alt={name} />
        <Card.Body>
          <Card.Title>
            <a href="#">{name}</a>
          </Card.Title>
          <Card.Text>{description}</Card.Text>
          <div className="rating">
            <span className="fa fa-stack">
              <i className="fa fa-star"></i>
            </span>
            <span className="fa fa-stack">
              <i className="fa fa-star"></i>
            </span>
            <span className="fa fa-stack">
              <i className="fa fa-star"></i>
            </span>
            <span className="fa fa-stack">
              <i className="fa fa-star"></i>
            </span>
            <span className="fa fa-stack">
              <i className="fa fa-star-o"></i>
            </span>
          </div>
          
          <div className="cart">
            <Button variant="primary">Chat with Guide</Button>
          </div>
        </Card.Body>
        <Button
          type="button"
          className="btn btn-default wishlist"
          data-toggle="tooltip"
          data-placement="right"
          title="Wishlist"
        >
          <i className="fa fa-heart"></i>
        </Button>
        <Button
          type="button"
          className="btn btn-default compare"
          data-toggle="tooltip"
          data-placement="right"
          title="Compare"
        >
          <i className="fa fa-circle-o"></i>
        </Button>
      </Card>
    </div>
  );
};

const App = () => {
  return (
    <Container>
      <Row>
        <Col sm={3} xs={12}>
          <div className="list-group">
            <a href="#" className="list-group-item">
              Shoes
            </a>
            <a href="#" className="list-group-item">
              - Satchel
            </a>
            <a href="#" className="list-group-item">
              - Tote
            </a>
            <a href="#" className="list-group-item">
              - Shoulder
            </a>
            <a href="#" className="list-group-item">
              - Clutch &amp; Mini
            </a>
          </div>

          <div className="product-sidebar">
            <h5 className="text-center">Featured</h5>
            <ProductItem
              name="Leather laptop bag"
              description=""
              
              image=""
            />
            <ProductItem
              name="Leather laptop bag navy"
              description=""
              
              image=""
            />
            <ProductItem
              name="Soft leather laptop bag"
              description=""
             
              image=""
            />
          </div>
        </Col>
        <Col sm={9}>
          <Row>
            <Col sm={4}>
              <div className="btn-group hidden-xs">
                <Button type="button" id="list-view" className="btn btn-default" data-toggle="tooltip" title="List View">
                  <i className="fa fa-th-list"></i>
                </Button>
                <Button type="button" id="grid-view" className="btn btn-default" data-toggle="tooltip" title="Grid View">
                  <i className="fa fa-th"></i>
                </Button>
              </div>
            </Col>
            <Col sm={2} className="text-right">
              <label className="control-label" htmlFor="input-sort">
                Sort By:
              </label>
            </Col>
            <Col sm={3} className="text-right">
              <select id="input-sort" className="form-control">
                <option value="" selected="selected">
                  Default
                </option>
                <option value="">Name</option>
                <option value="">Date</option>
              </select>
            </Col>
            <Col sm={1} className="text-right">
              <label className="control-label" htmlFor="input-limit">
                Show:
              </label>
            </Col>
            <Col sm={2} className="text-right">
              <select id="input-limit" className="form-control">
                <option value="" selected="selected">
                  9
                </option>
                <option value="">15</option>
                <option value="">25</option>
                <option value="">50</option>
                <option value="">100</option>
              </select>
            </Col>
          </Row>
          <br />
          <Row>
            <ProductItem
              name="Leather laptop bag navy"
              description="Stop your co-workers in their tracks with the stunning new 30-inch diagonal HP LP3065 Flat Panel."
              
              image=""
            />
            <ProductItem
              name="Waxed canvas laptop bag olive"
              description="Intel Core 2 Duo processor Powered by an Intel Core 2 Duo processor at speeds up to 2.1.."
              
              image=""
              isNew={true}
            />
            <ProductItem
              name="Leather laptop bag orange"
              description="MacBook Air is ultrathin, ultraportsble, and ultra unlike anything else. But you don't lose inche.."
              
              image=""
            />
            <ProductItem
              name="Waxed canvas laptop bag navy"
              description="Latest Intel mobile architecture Powered by the most advanced mobile processors.."
              
              image=""
              isNew={true}
            />
            <ProductItem
              name="Leather laptop bag navy"
              description="Stop your co-workers in their tracks with the stunning new 30-inch diagonal HP LP3065 Flat Panel."
              
              image=""
            />
            <ProductItem
              name="Waxed canvas laptop bag olive"
              description="Intel Core 2 Duo processor Powered by an Intel Core 2 Duo processor at speeds up to 2.1.."
              
              image=""
              isNew={true}
            />
            <ProductItem
              name="Leather laptop bag orange"
              description="MacBook Air is ultrathin, ultraportsble, and ultra unlike anything else. But you don't lose inche.."
              
              image=""
            />
            <ProductItem
              name="Waxed canvas laptop bag navy"
              description="Latest Intel mobile architecture Powered by the most advanced mobile processors.."
              
              image=""
              isNew={true}
            />
            <ProductItem
              name="Leather laptop bag navy"
              description="Stop your co-workers in their tracks with the stunning new 30-inch diagonal HP LP3065 Flat Panel."
             
              image=""
            />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default App;