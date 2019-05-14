import React from 'react'
import PropTypes from 'prop-types'
import { storiesOf } from '@storybook/react'
import { withKnobs,text } from '@storybook/addon-knobs'
import { withSmartKnobs } from 'storybook-addon-smart-knobs'

const Button = ({ text, onClick }) => (
  <button onClick={ onClick }>{ text }</button>
)

Button.propTypes = {
  text: PropTypes.node,
  onClick: PropTypes.func
}

storiesOf('Button')
  .addDecorator(withSmartKnobs)
  .addDecorator(withKnobs)
  .add('simple', () => {
    // const name = text('children', 'Arunoda Susiripala');
    return (
        <Button text={'name'}></Button>
    )
  })