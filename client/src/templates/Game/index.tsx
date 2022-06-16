import Base from 'templates/Base'

import * as S from './styles'

export type GameTemplanteProps = {
  cover: string
}

const Game = ({ cover }: GameTemplanteProps) => (
  <Base>
    <S.Cover src={cover} role="image" aria-label="cover" />
  </Base>
)

export default Game
