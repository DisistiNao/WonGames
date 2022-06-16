import Game, { GameTemplanteProps } from 'templates/Game'

export default function Index(props: GameTemplanteProps) {
  return <Game {...props} />
}

// gerar em build time (/game/bla, /game/foo, ...)
export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: 'cyberpunk-2077' } }],
    fallback: false
  }
}

export async function getStaticProps() {
  return {
    props: {
      cover:
        'https://images.gog-statics.com/5643a7c831df452d29005caeca24c28cdbfaa6fbea5a9556b147ee26d325fa70_bg_crop_1366x655.jpg'
    }
  }
}
