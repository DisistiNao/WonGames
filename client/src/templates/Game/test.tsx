import { renderWithTheme } from '../../utils/tests/helpers'
import { screen } from '@testing-library/react'

import Game, { GameTemplanteProps } from '.'

import galleryMock from 'components/Gallery/mock'
import gameInfoMock from 'components/GameInfo/mock'
import gameDetailsMock from 'components/GameDetails/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import { GameDetailsProps } from 'components/GameDetails'

const props: GameTemplanteProps = {
  cover: 'bg-image.jpg',
  gameInfo: gameInfoMock,
  gallery: galleryMock,
  description: `<h1>Custom HTML</h1>`,
  details: gameDetailsMock as GameDetailsProps,
  upcomingGames: gamesMock,
  upcomingHighlight: highlightMock,
  recommendedGames: gamesMock
}

jest.mock('components/Menu', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Menu"></div>
    }
  }
})

jest.mock('components/GameInfo', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock GameInfo"></div>
    }
  }
})

jest.mock('components/Gallery', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Gallery"></div>
    }
  }
})

jest.mock('components/GameDetails', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock GameDetails"></div>
    }
  }
})

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Showcase"></div>
    }
  }
})

describe('<Game />', () => {
  it('should render the template with components', () => {
    renderWithTheme(<Game {...props} />)

    expect(screen.getByTestId('Mock GameInfo')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Gallery')).toBeInTheDocument()
    expect(screen.getByTestId('Mock GameDetails')).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(2)
    expect(
      screen.getByRole('heading', { name: /custom html/i })
    ).toBeInTheDocument()
  })

  it('should not render the gallery if no images', () => {
    renderWithTheme(<Game {...props} gallery={undefined} />)

    expect(screen.queryByTestId('Mock Gallery')).not.toBeInTheDocument()
  })

  it('should not render the gallery on mobile', () => {
    renderWithTheme(<Game {...props} />)

    expect(screen.getByTestId('Mock Gallery').parentElement).toHaveStyle({
      display: 'none'
    })

    expect(screen.getByTestId('Mock Gallery').parentElement).toHaveStyleRule(
      'display',
      'block',
      {
        media: '(min-width: 768px)'
      }
    )
  })

  it('should not render the gallery on mobile', () => {
    renderWithTheme(<Game {...props} />)

    const cover = screen.getByRole('image', { name: /cover/i })

    expect(cover).toHaveStyle({
      backgroundImage: 'url(bg-image.jpg)',
      height: '39.5rem'
    })

    expect(cover).toHaveStyleRule('height', '70rem', {
      media: '(min-width: 768px)'
    })

    expect(cover).toHaveStyleRule(
      'clip-path',
      'polygon(0 0,100% 0,100% 100%,0 85%)',
      {
        media: '(min-width: 768px)'
      }
    )
  })
})
