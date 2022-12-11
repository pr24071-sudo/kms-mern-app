import React from 'react'
import client1 from "../images/clients/client-1.png"
import client2 from "../images/clients/client-2.png"
import client3 from "../images/clients/client-3.png"
import client4 from "../images/clients/client-4.png"
import client5 from "../images/clients/client-5.png"

const Client = () => {
  return (
    <div>
            <section id="clients" class="clients clients">
      <div class="container">

        <div class="row">

          <div class="col-lg-2 col-md-4 col-6">
            <img src={client1} class="img-fluid" alt="" data-aos="zoom-in"/>
          </div>

         <div class="col-lg-2 col-md-4 col-6">
            <img src={client2} class="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="100"/>
          </div>

          <div class="col-lg-2 col-md-4 col-6">
            <img src={client3} class="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="200"/>
          </div>

          <div class="col-lg-2 col-md-4 col-6">
            <img src={client4} class="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="300"/>
          </div>

          <div class="col-lg-2 col-md-4 col-6">
            <img src={client5} class="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="400"/>
          </div>

          <div class="col-lg-2 col-md-4 col-6">
            <img src={client1} class="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="500"/>
          </div>

        </div>

      </div>
    </section>
    </div>
  )
}

export default Client