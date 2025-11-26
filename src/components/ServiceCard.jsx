import React, { useEffect, useState } from "react";

import Plumbing from ".././assets/images/plumbing.jfif";
import BathroomRemodel from ".././assets/images/bathroom-remodel.jpg";
import ACandfurness from ".././assets/images/furness.jfif";
import painting from ".././assets/images/painting.jfif";
import KitchenRemodel from ".././assets/images/Kitchen-Remodel.jpg";
import Appliance_installation from ".././assets/images/Appliance.jpg";
import Spot_light_fitting from ".././assets/images/potlight.jpg";
import Flooring from ".././assets/images/flooring.jpg";



export default function  ServiceCard({ service }){
   
  const [services, setServices] = useState([]);
    const imageMap = {
            "Plumbing":Plumbing,
            "Bathroom Remodel":BathroomRemodel,
            "Painting":painting,
            "Kitchen Remodel":KitchenRemodel,
            "Appliance Installation":Appliance_installation,
            "Pot Light fitting":Spot_light_fitting,
            "Flooring":Flooring,
            "AC & Furness":ACandfurness,
            };

 
    return(
        <div key={service._id} id="services" style={{ border: '1px solid #eee', padding:12, borderRadius:8 ,backgroundColor:'#c79a27',wordWrap:"break-word",whiteSpace:"normal"}}>
            
             <img src={imageMap[service.title] || Plumbing} alt={service.title} style={{width:'100%', height:'200px', objectFit:'cover'}} />
             <div style={{marginTop:'10px'}}>
                 <h3>{service.title}</h3>
                 <p style={{ minHeight:28 }}>{service.description}</p>
             </div>
           
           
        </div>

        
    );
}