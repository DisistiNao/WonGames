import Base from 'templates/Base'

import { BannerProps } from 'components/Banner'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import { Container } from 'components/Container'
import BannerSlider from 'components/BannerSlider'
import Showcase from 'components/Showcase'

import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  comingSonnGames: GameCardProps[]
  comingSonnHighlight: HighlightProps
  comingSonnMoreGames: GameCardProps[]
  freeHighlight: HighlightProps
  freeGames: GameCardProps[]
}

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  comingSonnGames,
  comingSonnHighlight,
  comingSonnMoreGames,
  freeHighlight,
  freeGames
}: HomeTemplateProps) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Showcase title="News" games={newGames} />
    </S.SectionNews>

    <Showcase
      title="Most Popular"
      highlight={mostPopularHighlight}
      games={mostPopularGames}
    />

    <S.SectionComingSonn>
      <Showcase title="Coming Sonn" games={comingSonnGames} />
      <Showcase highlight={comingSonnHighlight} games={comingSonnMoreGames} />
    </S.SectionComingSonn>

    <Showcase title="Free Games" highlight={freeHighlight} games={freeGames} />
  </Base>
)

export default Home
