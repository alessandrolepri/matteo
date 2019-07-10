import React from 'react'
// import { Icon, Step } from 'semantic-ui-react'
import { MDBRow, MDBCol, MDBIcon, MDBBtn, MDBInput } from 'mdbreact'


const Details = () => {
  return (
    <section className="my-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Contact us
      </h2>
      <p className="text-center w-responsive mx-auto pb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
        error amet numquam iure provident voluptate esse quasi, veritatis
        totam voluptas nostrum quisquam eum porro a pariatur veniam.
      </p>
      <MDBRow>
        <MDBCol md="6">
          <form>
            <p className="h5 text-center mb-4">Write to us</p>
            <div className="grey-text">
              <MDBInput
                label="Your name"
                icon="user"
                group type="text"
                validate error="wrong"
                success="right"
              />
              <MDBInput
                label="Your email"
                icon="envelope"
                group type="email"
                validate error="wrong"
                success="right"
              />
              <MDBInput
                label="Subject"
                icon="tag"
                group type="text"
                validate error="wrong"
                success="right"
              />
              <MDBInput
                label="Your message"
                type="textarea"
                rows="8"
                icon="pencil-alt"
              />
            </div>
            <div className="text-center">
              <MDBBtn outline color="secondary">
                      Send <MDBIcon far icon="paper-plane" className="ml-1" />
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
        <MDBCol lg="7">
          <div
            id="map-container"
            className="rounded z-depth-1-half map-container"
            style={{ height: '160px' }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d76765.98321148289!2d-73.96694563267306!3d40.751663750099084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1525939514494"
              title="This is a unique title"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
            />
          </div>
          <br />
          <MDBRow className="text-center">
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="map-marker-alt" />
              </MDBBtn>
              <p>New York, 94126</p>
              <p className="mb-md-0">United States</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="phone" />
              </MDBBtn>
              <p>+ 01 234 567 89</p>
              <p className="mb-md-0">Mon - Fri, 8:00-22:00</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="envelope" />
              </MDBBtn>
              <p>info@gmail.com</p>
              <p className="mb-md-0">sale@gmail.com</p>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </section>
  )
}

export default Details

// const Details = () => (
//   <Step.Group widths={3}>
//     <Step>
//       <Icon name='envelope' />
//       <Step.Content>
//         <Step.Title><a href="mailto:matteoattitrainer@gmail.com" target="_blank" rel="noopener noreferrer">Email</a></Step.Title>
//       </Step.Content>
//     </Step>
//     <Step>
//       <Icon name='phone' />
//       <Step.Content>
//         <Step.Title>Cellulare</Step.Title>
//         <p> +39 349 527 2302 </p>
//       </Step.Content>
//     </Step>
//     <Step>
//       <Icon name='instagram' />
//       <Step.Content>
//         <Step.Title><a href="https://www.instagram.com/matteoattitrainer/?utm_source=ig_profile_share&igshid=1j5f6lw6s50we" target="_blank" rel="noopener noreferrer"> Seguimi </a></Step.Title>
//       </Step.Content>
//     </Step>
//   </Step.Group>
// )
