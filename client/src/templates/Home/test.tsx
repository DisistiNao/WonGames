import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

import Home from '.'

const props = {
  banners: bannersMock,
  newGames: [gamesMock[0]],
  mostPopularHighlight: highlightMock,
  mostPopularGames: [gamesMock[0]],
  comingSonnGames: [gamesMock[0]],
  comingSonnHighlight: highlightMock,
  comingSonnMoreGames: [gamesMock[0]],
  freeHighlight: highlightMock,
  freeGames: [gamesMock[0]]
}

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByLabelText(/Open menu/i)).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /contact/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /news/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /most populars/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /coming sonn/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /free games/i })
    ).toBeInTheDocument()

    expect(screen.getAllByText(/defy death 1/i)).toHaveLength(1)
    expect(screen.getAllByText(/population zero/i)).toHaveLength(5)
    expect(screen.getAllByText(/red dead is back!/i)).toHaveLength(3)
  })
})
