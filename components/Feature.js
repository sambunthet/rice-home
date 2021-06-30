import React from 'react';
import { Container, Row, Col } from "reactstrap";

const FeatureBox = (props) => {
  return (
    <>
      {props.features.map((feature, key) =>
        feature.id % 2 !== 0 ? (
          <Row
            key={key}
            className={
              feature.id === 1
                ? "align-items-center"
                : "align-items-center mt-5"
            }
          >
            <Col md={5} data-aos="fade-right">
              <div>
                <img
                  src={feature.img}
                  alt=""
                  className="img-fluid d-block mx-auto"
                />
              </div>
            </Col>
            <Col md={{ size: 6, offset: 1 }} data-aos="fade-left">
              <div className="mt-5 mt-sm-0 mb-4">
                <div className="my-4">
                  <i className={feature.icon}></i>
                </div>
                <h5 className="text-dark font-weight-normal mb-3 pt-3">
                  {feature.title}
                </h5>
                <p className="text-muted mb-3 f-15">{feature.desc}</p>
                <a href={feature.link} className="f-16 text-warning">
                  Read More <span className="right-icon ml-2">&#8594;</span>
                </a>
              </div>
            </Col>
          </Row>
        ) : (
          <Row key={key} className="align-items-center mt-5">
            <Col md={6} data-aos="fade-right">
              <div className="mb-4">
                <div className="my-4">
                  <i className="mdi mdi-account-group"></i>
                </div>
                <h5 className="text-dark font-weight-normal mb-3 pt-3">
                  {feature.title}
                </h5>
                <p className="text-muted mb-3 f-15">{feature.desc}</p>
                <a href={feature.link} className="f-16 text-warning">
                  Read More <span className="right-icon ml-2">&#8594;</span>
                </a>
              </div>
            </Col>
            <Col md={{ size: 5, offset: 1 }} className="mt-5 mt-sm-0" data-aos="fade-left">
              <div>
                <img
                  src={feature.img}
                  alt=""
                  className="img-fluid d-block mx-auto"
                />
              </div>
            </Col>
          </Row>
        )
      )}
    </>
  );
}

const Feature = () => {

  const features = [
    {
      id: 1,
      img: "http://rice.com.kh/products/67/Zhao_Qing.jpg",
      title: "Zhoa Qing",
      desc: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      link: "/",
    },
    {
      id: 2,
      img: "http://rice.com.kh/products/63/LF_Rice___U.jpg",
      title: "Lai Fen",
      desc: "Sed perspiciatis unde omnis natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo excepturi sint occaecati cupiditate architecto.",
      link: "/",
    },
    {
      id: 3,
      img: "http://rice.com.kh/products/53/400g1_copy.jpg",
      title: "Jiang Xi CamRice",
      desc: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      link: "/",
    },
    {
      id: 4,
      img: "http://rice.com.kh/products/56/Camrice_YS.jpg",
      title: "Fine Rice Vermicelli CamRice",
      desc: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      link: "/",
    },
  ];

  return (
    <section className="section" id="feature">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8} data-aos="flip-left">
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">
                <span className="text-warning">Rice Vermicelli</span>
              </h3>
              <p className="text-muted">
                Indochina Rice Mill has gained the confidence and trust of our
                valuable worldwide customers in our top quality rice and rice
                vermicelli products. Armed with a serious management team and
                our stringent quality control, we are here to consistently
                provide the most competitive price and the best quality rice and
                rice vermicelli to our customers, and are ready to be your
                trustworthy partner.
              </p>
            </div>
          </Col>
        </Row>
        <FeatureBox features={features} />
      </Container>
    </section>
  );
}

export default Feature;
