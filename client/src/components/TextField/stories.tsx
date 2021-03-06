import { Story, Meta } from '@storybook/react'
import { Email } from '@styled-icons/material-outlined/Email'

import TextField, { TextFieldProps } from '.'

export default {
  title: 'Form/TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    labelFor: 'Email',
    id: 'Email',
    initialValue: '',
    placeholder: 'john.cage@gmail.com'
  },
  argTypes: {
    onInput: { action: 'changed' },
    icon: {
      type: 'symbol'
    }
  }
} as Meta

export const Default: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

export const withIcon: Story = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

withIcon.args = {
  icon: <Email />
}

export const isDisabled: Story = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField disabled {...args} />
  </div>
)

export const withError: Story = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

withError.args = {
  icon: <Email />,
  error: 'Ops... an error has occurred'
}
