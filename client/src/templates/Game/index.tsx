import Base from 'templates/Base'
import GameInfo, { GameInfoProps } from 'components/GameInfo'

import * as S from './styles'

export type GameTemplanteProps = {
  cover: string
  gameInfo: GameInfoProps
}

const Game = ({ cover, gameInfo }: GameTemplanteProps) => (
  <Base>
    <S.Cover src={cover} role="image" aria-label="cover" />

    <S.Main>
      <S.SectionGameInfo>
        <GameInfo {...gameInfo} />
      </S.SectionGameInfo>
    </S.Main>
  </Base>
)

export default Game
