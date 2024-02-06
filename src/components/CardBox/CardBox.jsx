import React, {} from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "../../Asserts/Style/Middle2.css"
import IMAGES from "../../Asserts/Images";
import Slider from "react-slick";

const CardBox = () => {  

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
            },
          },
        ],
      };
  return ( 
    <div className="mid2">
   <Container>  
    
    <Row className="parentSlick">
   <Col sm={12} md={12} lg={12}>
     <h2 className=" Storiess d-flex justify-content-center align-items-center  ">
       What they say about us
     </h2>
   </Col>
   <Slider {...settings}>
     <Col sm={6} md={8} lg={4} className="mb-4">
       <Card className="my-3 ">
         <Card.Body>
           <div className="box2">
             <img src={IMAGES.ECLIPSE} className="open2" alt="..." />
             <div className="nameOverlay mx-5 px-1 my-2 ">
               John Doe
             </div>
             <div className="nameOverlayy mx-5 px-1 ">
               {" "}
               Unicorn Exchange{" "}
             </div>
           </div>
           <Card.Subtitle className="mb-2 week">
             A 2 week copy project finished in 2 days with jasper
           </Card.Subtitle>
           <Card.Text className="text-muted CT">
             Lorem Ipsum is simply dummy text of the printing and
             typesetting industry. Lorem Ipsum has been the industry's
             standard dummy text ever since the 1500s, when an unknown
             printer took a galley of type and scrambled it to make a
             type specimen bo
           </Card.Text>
         </Card.Body>
       </Card>
     </Col>
     <Col sm={6} md={8} lg={4} className="mb-4">
       <Card className=" my-3  border-0">
         <Card.Body>
           <div className="box2">
             <img src={IMAGES.ECLIPSE} className="open2" alt="..." />
             <div className="nameOverlay mx-5 px-1 my-2 ">
               John Doe
             </div>
             <div className="nameOverlayy mx-5 px-1 ">
               {" "}
               Unicorn Exchange{" "}
             </div>
           </div>
           <Card.Subtitle className="mb-2 week">
             A 2 week copy project finished in 2 days with jasper
           </Card.Subtitle>
           <Card.Text className="text-muted CT">
             Lorem Ipsum is simply dummy text of the printing and
             typesetting industry. Lorem Ipsum has been the industry's
             standard dummy text ever since the 1500s, when an unknown
             printer took a galley of type and scrambled it to make a
             type specimen bo
           </Card.Text>
         </Card.Body>
       </Card>
     </Col>
     <Col sm={6} md={8} lg={4} className="mb-4 ">
       <Card className=" my-3   border-0">
         <Card.Body>
           <div className="box2">
             <img src={IMAGES.ECLIPSE} className="open2" alt="..." />
             <div className="nameOverlay mx-5 px-1  my-2 ">
               John Doe
             </div>
             <div className="nameOverlayy mx-5 px-1 ">
               {" "}
               Unicorn Exchange{" "}
             </div>
           </div>
           <Card.Subtitle className="mb-2 week">
             A 2 week copy project finished in 2 days with jasper
           </Card.Subtitle>
           <Card.Text className="text-muted CT">
             Lorem Ipsum is simply dummy text of the printing and
             typesetting industry. Lorem Ipsum has been the industry's
             standard dummy text ever since the 1500s, when an unknown
             printer took a galley of type and scrambled it to make a
             type specimen bo.
           </Card.Text>
         </Card.Body>
       </Card>
     </Col>

     <Col sm={6} md={8} lg={4} className="mb-4 ">
       <Card className=" my-3   border-0">
         <Card.Body>
           <div className="box2 ">
             <img src={IMAGES.ECLIPSE} className="open2" alt="..." />
             <div className="nameOverlay mx-5 px-1  my-2 ">
               John Doe
             </div>
             <div className="nameOverlayy mx-5 px-1 ">
               {" "}
               Unicorn Exchange{" "}
             </div>
           </div>
           <Card.Subtitle className="mb-2 week">
             A 2 week copy project finished in 2 days with jasper
           </Card.Subtitle>
           <Card.Text className="text-muted CT">
             Lorem Ipsum is simply dummy text of the printing and
             typesetting industry. Lorem Ipsum has been the industry's
             standard dummy text ever since the 1500s, when an unknown
             printer took a galley of type and scrambled it to make a
             type specimen bo.
           </Card.Text>
         </Card.Body>
       </Card>
     </Col>
   </Slider>
 </Row> 
</Container>
</div>


  )
}

export default CardBox
