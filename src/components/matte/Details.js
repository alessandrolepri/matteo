import React from 'react'
import { Icon, Step } from 'semantic-ui-react'

const Details = () => (
  <Step.Group widths={3}>
    <Step>
      <Icon name='envelope' />
      <Step.Content>
        <Step.Title><a href="mailto:matteoattitrainer@gmail.com" target="_top">Scrivimi</a></Step.Title>
      </Step.Content>
    </Step>
    <Step>
      <Icon name='phone' />
      <Step.Content>
        <Step.Title>Cellulare</Step.Title>
      </Step.Content>
    </Step>
    <Step>
      <Icon name='instagram' />
      <Step.Content>
        <Step.Title>Follow Me</Step.Title>
      </Step.Content>
    </Step>
  </Step.Group>
)

export default Details
