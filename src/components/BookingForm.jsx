import React, { useState } from 'react';


export default function BookingForm({ services, apiBase }){
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        service: services?.[0]?._id || '',
        date: '',
        address: '',
        notes:''
    });
    const [status, setStatus] = useState('');

    //keep service select updated when services load
    React.useEffect(()=>{
        if(services?.length && !form.service) setForm(f=>({...f, service: services[0]._id}));
    },[services]);

    const handle = e => setForm({ ...form, [e.target.name]: e.target.value });

    const submit = async (e) =>{
        e.preventDefault();
        setStatus('sending...');
        try{
            const res = await fetch('http://localhost:4000/api/bookings',{
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(form)
            });
            if (!res.ok) throw new Error('Server error');
            setStatus('Booking request sent! we will contact you soon.');
            setForm({ name:'', email:'', phone:'', service: services?.[0]?._id || '', date:'', address:'', notes:''});
        } catch(err){
            setStatus('Failed to send booking. Try again.');
        }
    };

    return(
     
     <section id="booking" className="py-5 bg-light">
      <div className="container">
        <h2 style={{color:"rgb(3 54 73 )"}} className="text-center  fw-bold mb-4">
          Book a Job
        </h2>

        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <form onSubmit={submit} className="card shadow border-0 p-4 bg-white">
              <div className="mb-3">
                <input type="text" name="name" className="form-control" placeholder="Enter your name" value={form.name} onChange={handle} required />
              </div>
                <div className="mb-3">
                 <input name="email" value={form.email} className="form-control" onChange={handle} placeholder="Email" type="email" />
                </div>
                 <div className="mb-3">
                    
                <input name="phone" value={form.phone} className="form-control" onChange={handle} placeholder="Phone" required />
               </div>
                <div className="mb-3">
                    
                <select name="service" value={form.service} className="form-control" onChange={handle} >
                  <option value="">Select a service</option> {services.map((s) => (<option key={s._id} value={s._id}>{s.title}</option>))}
                </select>
                </div>
                 <div className="mb-3">
                <input name="date" value={form.date} className="form-control" onChange={handle} placeholder="date" />
                 </div>
                 <div className="mb-3">
                <input name="address" value={form.address} className="form-control" onChange={handle} placeholder="Address" />
                </div>
                 <div className="mb-3">
                <textarea name="notes" value={form.notes} className="form-control" onChange={handle} placeholder="Extra details"  />
                </div>
                <button type="submit" style={{backgroundColor:"rgb(3 54 73 / 84%)", color:"white"}} className="btn  w-100 fw-semibold">Send Booking</button>
                    {status}
            </form>
          </div>
        </div>
      </div>
    </section>
    );
}