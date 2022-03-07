import React from "react";
import "./index.scss";
// import Wood from "../../assets/Rectangle 15.png";
// import Woods from "../../assets/Rectangle 17.png";
// import Gorciqner from "../../assets/Rectangle 18.png";
import Xohanoc from "../../assets/Rectangle 22.png";
import Mijancq from "../../assets/Rectangle 23.png";
import Paharnner from "../../assets/Rectangle 24.png";
import Paharnner2 from "../../assets/Rectangle 25.png";
import Kuxnya2 from "../../assets/Rectangle 26.png";
import Arrow from "../../assets/Arrow 1.png";

const Card = ({Data}) => {
  console.log("Data",Data);
  return (
    <>
      <div className="div">
        <p className="txt">Materials that we use</p>
      </div>
       {
         Data?.map((item) => (
           <div key={item.id} className="images">
             <img src={item.image} alt="Wood" />
           </div>
         ))
       }
       
     
      {/* <div className="images">
        <img src={Wood} alt="ped" className="image1" />
        <img src={Woods} alt="peder" className="image2" />
        <img src={Gorciqner} alt="gorciqner" className="image3" />
      </div> */}
      <div className="div2">
        <button className="btn">DESCOVER</button>
      </div>
      <div className="div3">
        <p className="txt2">Best offer of day</p>
      </div>
      <div className="black-bg"></div>
      <div>
        <img src={Xohanoc} alt="xohanoc" className="xohanoc" />
      </div>
      <div className="black-bg2"></div>
      <div className="div4">
        <p className="txt3"> Recomended for you</p>
      </div>
      <div className="all imgs">
        <img src={Mijancq} alt="mijancq" className="img1" />
        <img src={Paharnner} alt="paharanner" className="img2" />
        <img src={Paharnner2} alt="paharanner2" className="img3" />
        <img src={Kuxnya2} alt="kuxnya" className="img4" />
        <img src={Arrow} alt="arrow" className="img5" />
      </div>
      
    </>
  );
};

export default Card;
