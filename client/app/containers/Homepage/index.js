/** Homepage **/

import React from "react";

import { connect } from "react-redux";
import { Row, Col } from "reactstrap";

import actions from "../../actions";
import banners from "./banners.json";
import CarouselSlider from "../../components/Common/CarouselSlider";
import { responsiveOneItemCarousel } from "../../components/Common/CarouselSlider/utils";

class Homepage extends React.PureComponent {
  render() {
    return (
      <div className="homepage">
        <Row className="justify-content-center">
          <Col xs="12" lg="8" className="order-lg-2 mb-3 px-3 px-md-2">
            <div
              className="home-carousel"
              style={{ width: "100%", height: "540px" }}
            >
              <CarouselSlider
                swipeable={true}
                showDots={true}
                infinite={true}
                autoPlay={false}
                slides={banners}
                responsive={responsiveOneItemCarousel}
              >
                {banners.map((item, index) => (
                  <img
                    key={index}
                    src={item.imageUrl}
                    alt={`Banner ${index}`}
                    style={{ width: "100%", height: "100%" }}
                  />
                ))}
              </CarouselSlider>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, actions)(Homepage);
