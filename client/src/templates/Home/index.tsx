import { BannerProps } from 'components/Banner'
import { GameCardProps } from 'components/GameCard'
import Highlight, { HighlightProps } from 'components/Highlight'

import { Container } from 'components/Container'
import BannerSlider from 'components/BannerSlider'
import GameCardSlider from 'components/GameCardSlider'
import Footer from 'components/Footer'
import Heading from 'components/Heading'
import Menu from 'components/Menu'

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
  <section>
    <Container>
      <Menu />
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Container>
        <Heading lineLeft lineColor="secondary">
          News
        </Heading>
        <GameCardSlider items={newGames} color="black" />
      </Container>
    </S.SectionNews>

    <S.SectionMostPopular>
      <Container>
        <Heading lineLeft lineColor="secondary">
          Most Populars
        </Heading>
        <Highlight {...mostPopularHighlight} />
        <GameCardSlider items={mostPopularGames} />
      </Container>
    </S.SectionMostPopular>

    <S.SectionComingSonn>
      <Container>
        <Heading lineLeft lineColor="secondary">
          Coming Sonn
        </Heading>
        <GameCardSlider items={comingSonnGames} />
        <Highlight {...comingSonnHighlight} />
        <GameCardSlider items={comingSonnMoreGames} />
      </Container>
    </S.SectionComingSonn>

    <S.SectionFreeGames>
      <Container>
        <Heading lineLeft lineColor="secondary">
          Free Games
        </Heading>
        <Highlight {...freeHighlight} />
        <GameCardSlider items={freeGames} />
      </Container>
    </S.SectionFreeGames>

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </section>
)

export default Home
