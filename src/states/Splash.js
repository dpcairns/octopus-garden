import Phaser from 'phaser'
import { centerGameObjects } from '../utils'

export default class extends Phaser.State {
  init () {}

  preload () {
    this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg')
    this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar')
    centerGameObjects([this.loaderBg, this.loaderBar])

    this.load.setPreloadSprite(this.loaderBar)
    //
    // load your assets
    //
    this.load.image('ocean', 'assets/images/ocean.gif')
    this.load.image('octopus', 'assets/images/octopus.png')
    this.load.spritesheet('dude', 'assets/images/dude.png', 108, 140)
    this.load.spritesheet('coin', 'assets/images/coin.png', 100, 100)
  }

  create () {
    this.state.start('Game')
  }
}
