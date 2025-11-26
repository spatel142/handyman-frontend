import React, { useState, useEffect } from 'react'
import ServiceCard from './components/ServiceCard'
import BookingForm from './components/BookingForm'
import Header from './components/Header'
import Footer from './components/Footer'
import bgImage from './assets/images/handyman1.jpg';
import Contact from './components/Contact';
import './index.css';
import './App.css';
import logoImage from './assets/images/logo.png';
import BusinessCard from './components/BusinessCard'




const API = import.meta.env.VITE_API_BASE ;

function App() {
  const [services, setServices] = useState([]);

  useEffect(() => {
      fetch('API/api/services')
      .then(r => r.json())
      .then(setServices)
      .catch(console.error);
  }, []);

  return (
   <div>
    <Header/>
    <div style={{  margin:'0 ',width:'100%'}}>
      <div  id="home" className="text-white text-center py-5" style={{ position: 'relative', overflow: 'hidden',height:'80vh'}}>
          <div className=" text-center" style={{ textAlign:'center', marginBottom:20, backgroundImage: `url(${bgImage}) `,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "80vh",
            filter: 'blur(8px)',
            inset:0,
            transform: 'scale(1.1)',
            zIndex: 0,
            position: "absolute",
            paddingTop: "60px",}}> </div>
            <div style={{ position: 'relative', zIndex: 1 ,color:"rgb(3 54 73 )",paddingTop:'50px'}}>
                <img src={logoImage} style={{height:'22vh'}}/>
                <h1 className="display-2 fw-bold mb-3">Handyman Services</h1>
                <p className="lead fs-4 mb-4">Reliable repairs . Plumbing . Painting . more</p>
                <button onClick={()=> document.getElementById("bookingSection").scrollIntoView({behavior:"smooth"})}
                  style={{
                      padding:"12px 25px",
                      fontSize:18,
                      border:"none",
                      borderRadius:6,
                      cursor:"pointer",
                      backgroundColor:"rgb(3 54 73 / 84%)", 
                      color:"#c79a27"
                  }}>
                    Book a Service
                </button>
            </div>
      </div>
     
      
      <section id='bookingSection'>
          <div >
              <BookingForm services={services} apiBase={API} />
          </div>
        
      </section>
      
      <section style={{margin:'50px 0'}}>
        <div>
          <h2 style={{color:"rgb(3 54 73 )"}} className="text-center fw-bold mb-4">
            Services
          </h2>
          <div style={{ display:'grid', gridTemplateColumns:' repeat(auto-fit,minmax(220px,1fr))', gap:12 ,margin:'0 10%'}}>
            { services.map(s => <ServiceCard key={s._id} service={s} />)}
          </div>
        </div>
      </section>

      
      <section>
        <Contact/>
      </section>
     
    </div>
    <Footer/>
    </div>
  )
}

export default App
