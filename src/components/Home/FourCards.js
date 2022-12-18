import React from "react";

function FourCards({heading,images}) {
  return (
    <>
      <div className="container-fluid celeb_container mt-5 p-2">
        <h1 className="text-center my-5">{heading}</h1>
        <div className="row p-md-5">
          {/* <div className="col-md-3 col-6 mb-5 mb-md-0">
            <a href="#">
              <img src={images[0]} />
            </a>
          </div>
          <div className="col-md-3 col-6 ">
            <a href="#">
              <img src={images[1]} />
            </a>
          </div>
          <div className="col-md-3 col-6 mb-5 mb-md-0">
            <a href="#">
              <img src={images[2]} />
            </a>
          </div>
          <div className="col-md-3 col-6 ">
            <a href="#">
              <img src={images[3]} />
            </a>
          </div>  */}
          {images.map((item)=>{
            return(
                <div className="col-md-3 col-6 ">
                <a href="#">
                  <img src={item} />
                </a>
              </div>  
            )
          })}
        </div>
      </div>
    </>
  );
}

export default FourCards;
