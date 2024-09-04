import React from "react";
import Navbar from "../../components/navbar/Navbar";
import CenterImage from "../../components/centerImage/CenterImage";
import CreditCard from "../../components/HomeComponents/Credit";
import Agendar from "../../components/HomeComponents/Agendar";
import Street from "../../components/HomeComponents/Street";

 function HomePage(){
    return (
        <div>
        <Navbar />
      <CenterImage></CenterImage>
      <CreditCard></CreditCard>
      <Street></Street>
      <Agendar></Agendar>
        </div>    
)

}

export default HomePage;
