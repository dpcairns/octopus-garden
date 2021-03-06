import Phaser from 'phaser'

export default class extends Phaser.Text {
  constructor ({ game, world, bannerText }) {
    super(game, 500, 400, 'Arrow keys to move. Spacebar to shoot. Hold X to charge')
    this.font = 'Bangers'
    this.padding.set(10, 16)
    this.fontSize = 40
    this.fill = 'black'
    this.smoothed = false
    this.anchor.setTo(0.5)

    this.game.add.sprite(500, 300, 'arrow-keys')
    this.game.add.existing(this)
  }

  update () {

  }
}
