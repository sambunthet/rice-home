import React from 'react';
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";



const About = () => {

  return (
    <section className="section bg-light" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center">
              <h3 className="font-weight-normal text-dark">
                About <span className="text-warning">Us</span>
              </h3>
            </div>
            <div className="title text-left mb-5 text-muted">
              {/* <h3 className="font-weight-normal text-dark">
                About <span className="text-warning">Us</span>
              </h3> */}

              <ul>
                <li>
                  <a>
                    Indochina Rice Mill has the capacity to produce large
                    quantities of quality rice and rice vermicelli to our
                    valuable customers all around the world.
                  </a>
                </li>
                <li>
                  <a>
                    Indochina Rice Mill is strategically located in Kompong
                    Chhnang Province on National Road No. 5 along the way to
                    Pursat province and Battambang province where the best
                    fragrant jasmine rice is grown.
                  </a>
                </li>

                <li>
                  <a>
                    The place is nature’s gift for farming being rich in fertile
                    soil, which produces excellent quality rice for our
                    customers.
                  </a>
                </li>

                <li>
                  <a>
                    We carefully select the best quality paddy for our premium
                    quality milled rice.
                  </a>
                </li>

                <li>
                  <a>
                    We are a reliable source with the ability to supply our
                    customers with a consistent product. Our factory’s warehouse
                    is able to store up to 30,000 metric tons using modern
                    machinery.
                  </a>
                </li>

                <li>
                  <a>
                    Honest and consistent, our company is growing continuously
                    and steadily; we endeavor to become your long term business
                    partner.
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h2 className="font-weight-light line-height-1_6 text-dark mb-4">
              Lorem Ipsum has been the industry's standard dummy text
            </h2>
          </Col>
          <Col md={{ size: 7, offset: 1 }}>
            <Row>
              <Col md={6}>
                <h6 className="text-dark font-weight-light f-20 mb-3">
                  Our Mission
                </h6>
                <p className="text-muted font-weight-light">
                  We are committed to collaborating with our business partners
                  around the world, supplying them with top quality products and
                  services.
                </p>
              </Col>
              <Col md={6}>
                <h6 className="text-dark font-weight-light f-20 mb-3">
                  Our Market
                </h6>
                <p className="text-muted font-weight-light">
                  Our core business is exporting premium quality rice and rice
                  vermicelli to Europe, USA, Australia, Africa, China, Hong Kong
                  etc…
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;