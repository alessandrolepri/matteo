import React from 'react'
import { Icon, Step } from 'semantic-ui-react'

const Details = () => (
  <Step.Group widths={3}>
    <Step>
      <Icon name='envelope' />
      <Step.Content>
        <Step.Title><a href="mailto:matteoattitrainer@gmail.com" target="_blank" rel="noopener noreferrer">Email</a></Step.Title>
      </Step.Content>
    </Step>
    <Step>
      <Icon name='phone' />
      <Step.Content>
        <Step.Title>Cellulare</Step.Title>
        <p> +39 349 527 2302 </p>
      </Step.Content>
    </Step>
    <Step>
      <Icon name='instagram' />
      <Step.Content>
        <Step.Title><a href="https://www.instagram.com/matteoattitrainer/?utm_source=ig_profile_share&igshid=1j5f6lw6s50we" target="_blank" rel="noopener noreferrer"> Follow Me </a></Step.Title>
      </Step.Content>
    </Step>
  </Step.Group>
)

export default Details
