import React from 'react'
import { Segment, Grid, Form, Input, Divider, Button, TextArea, Icon } from 'semantic-ui-react'


const Info = ({ handleChange, handleSubmit }) => {


  return(
    <section className="my-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Scrivimi
      </h2>
      <p className="text-center w-responsive mx-auto pb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
        error amet numquam iure provident voluptate esse quasi, veritatis
        totam voluptas nostrum quisquam eum porro a pariatur veniam.
      </p>

      <Grid columns={1} stackable textAlign='center'>
        <Grid.Column width={9}>
          <Divider hidden />
          <Segment color='blue'>
            <Icon name='comments outline' size='huge' />
            <Form onSubmit={handleSubmit} >

              <Form.Group widths='equal'>
                <Form.Input
                  label='Nome'
                  required
                  name='firstName'
                  placeholder='Nome'
                  onChange={handleChange}
                  icon="info"
                />

                <Form.Input
                  onChange={handleChange}
                  required
                  icon="info"
                  label='Cognome'
                  name='lastName'
                  placeholder='Cognome' />
              </Form.Group>

              <Form.Field required>
                <label>Indirizzo Email</label>
                <Input
                  onChange={handleChange}
                  icon="at"
                  placeholder='Email'
                  type='email'
                  name='email'
                />
              </Form.Field>

              <Form.Field required>
                <label>Scrivi il tuo messaggio</label>
                <TextArea
                  name='bio'
                  placeholder=''
                  style={{ minHeight: 100 }}
                  onChange={handleChange}
                />
              </Form.Field>

              <Button content="INVIA" primary icon="send" />

            </Form>
          </Segment>
        </Grid.Column>
      </Grid>

      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Dove mi trovi?
      </h2>

      <div className="flex-container">
        <div>
          <img id="here" src="images/sono-qui.png" />
          <h3> Oasi Wellness, Via xxx </h3>

        </div>
        <div className="indirizzo">
          <h3> Cel: 123495956</h3>
          <h3> test@test.com</h3>
        </div>
      </div>

    </section>
  )
}

export default Info
