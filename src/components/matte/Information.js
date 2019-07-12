import React from 'react'
import { Icon, Step } from 'semantic-ui-react'

const Information = () => (
  <Step.Group stackable='tablet'>
    <Step>
      <Icon name='map marker alternate' />
      <Step.Content>
        <Step.Title>Oasi Welleness</Step.Title>
        <Step.Description>Via Manin, 15, 44042 Cento FE, Italy</Step.Description>
      </Step.Content>
    </Step>
    <Step active>
      <Icon name='whatsapp' />
      <Step.Content>
        <Step.Title>whatsapp</Step.Title>
        <Step.Description>123456789</Step.Description>
      </Step.Content>
    </Step>
    <Step active>
      <Icon name='envelope' />
      <Step.Content>
        <Step.Title>Email</Step.Title>
        <Step.Description>test@test.com</Step.Description>
      </Step.Content>
    </Step>
  </Step.Group>
)

export default Information
