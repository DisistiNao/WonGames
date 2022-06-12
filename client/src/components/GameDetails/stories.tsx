import { Story, Meta } from '@storybook/react'
import GameDetails from '.'

export default {
  title: 'Game/GameDetails',
  component: GameDetails,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story = () => <GameDetails />
