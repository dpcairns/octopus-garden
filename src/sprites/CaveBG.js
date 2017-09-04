import Phaser from 'phaser'

export default class extends Phaser.TileSprite {
  constructor ({ game }) {
    super(game, 0, 0, game.world.width, game.world.height, 'cave')

    this.game.add.existing(this)
    console.log(this)
  }

  update () {

  }
}
