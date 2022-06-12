import React from 'react'
import "../foodbrew.css";

const Contact = () => {
  return (
    <section class="bottom">
    <header>
        <h1 class="logo">Visit Cincinnati</h1>
        <div class="toggle"></div>
    </header>

   <div className="contact">
  <h2>Contact Us</h2>
  <form>
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" />
    </div>
    <div className="form-group">
      <label htmlFor="exampleInputName">Name</label>
      <input type="text" className="form-control" id="exampleInputName" />
    </div>
    <div className="form-group">
      <label htmlFor="exampleInputPhoneNumber">Phone Number</label>
      <input type="tel" className="form-control" id="exampleInputPhoneNUmber" />
    </div>
    <div className="form-group">
      <label htmlFor="exampleInputCommemts">Comments</label>
      <input type="text" className="form-control" id="exampleInputComments" />
    </div>
    <button type="submit" className="btn btn-secondary">Submit</button>
  </form>
  <iframe src="https://my.atlistmaps.com/map/b026416f-080d-4b84-8317-c40e8cb416f1?share=true" allow="geolocation" width="100%" height="400px" frameborder="0" scrolling="no" allowfullscreen></iframe>

</div>

</section>





  )
}

export default Contact;