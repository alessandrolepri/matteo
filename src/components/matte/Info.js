/* eslint-disable max-len */
import React from 'react'
import { Segment, Grid, Form, Input, Divider, Button, TextArea, Icon } from 'semantic-ui-react'




const Details = ({ handleChange, handleSubmit }) => {


  return(
    <Grid columns={1} stackable textAlign='center'>
      <Grid.Column width={5}>
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
  )
}

export default Details
