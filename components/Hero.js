import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Hero = () => {
  return (
    <section className="section position-relative">
      <Container
        style={{
          backgroundImage: "url(https://wallpaperaccess.com/full/1463517.jpg)",
          width: "100%",
          height: "455px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div></div>
        <Row
          className="align-items-center pt-5 pb-4"
          style={{
            background: "rgba(0, 0, 0, 0.4)",
          }}
        >
          <Col lg={6} data-aos="flip-right">
            <div className="pr-lg-5">
              <p className="text-uppercase text-warning font-weight-medium f-56 mb-4">
                Welcome to
              </p>
              <h1 className="mb-4 font-weight-medium line-height-1_4">
                INDOCHINA RICE MILL LIMITED{" "}
                <span className="text-primary font-weight-medium">
                  Cambodia
                </span>
              </h1>
              <p className="text-white mb-4 pb-2">
                Indochina Rice Mill has gained the confidence and trust of our
                valuable worldwide customers in our top quality rice and rice
                vermicelli products. Armed with a serious management team and
                our stringent quality control, we are here to consistently
                provide the most competitive price and the best quality rice and
                rice vermicelli to our customers, and are ready to be your
                trustworthy partner.
              </p>
              <a href="#" className="btn btn-warning">
                Find Out How <span className="ml-2 right-icon">&#8594;</span>
              </a>
            </div>
          </Col>
          <Col lg={6}>
            {/* <div className="mt-5 mt-lg-0">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWTGmoPts84tytZFVvtjwWWGkYQn8yasbLng&usqp=CAU"
                width="100%"
                alt=""
                className="img-fluid mx-auto d-block"
              />
            </div> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;