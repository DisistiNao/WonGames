import { Story, Meta } from '@storybook/react'
import GameInfo, { GameInfoProps } from '.'
import mockGame from './mock'

export default {
  title: 'GameInfo',
  component: GameInfo,
  args: mockGame,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '144rem', padding: '1.5rem' }}>
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

export const Default: Story<GameInfoProps> = (args) => <GameInfo {...args} />
