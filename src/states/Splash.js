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
    this.load.image('ocean', 'assets/images/ocean.png')
    this.load.image('cave', 'assets/images/cave.png')
    this.load.image('blob', 'assets/images/blob.png')
    this.load.image('squareThings', 'assets/images/shell.png')
    this.load.spritesheet('octopus', 'assets/images/OCTOONE.png', 160, 120)
    this.load.spritesheet('coral', 'assets/images/coral.png', 465, 465)
    this.load.spritesheet('seaweed', 'assets/images/seaweed-small.png', 75, 300)
    this.load.image('wall', 'assets/images/wall.png')
    this.load.spritesheet('coin', 'assets/images/coin.png', 100, 100)
  }

  create () {
    this.state.start('Game')
  }
}
