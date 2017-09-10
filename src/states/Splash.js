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
    this.load.image('shell', 'assets/images/shell.png')
    this.load.image('arrow-keys', 'assets/images/arrow-keys.png')
    this.load.image('mobile', 'assets/images/mobile.png')

    this.load.spritesheet('blob', 'assets/images/blob.png', 80, 72)
    this.load.spritesheet('coral', 'assets/images/coral.png', 465, 465)
    this.load.spritesheet('coral-yellow', 'assets/images/coral-yellow.png', 80, 149)
    this.load.spritesheet('vine', 'assets/images/vine.png', 50, 239)

    this.load.spritesheet('octopus', 'assets/images/OCTOONE.png', 160, 120)
    this.load.spritesheet('crab', 'assets/images/crab.png', 200, 136)
    this.load.spritesheet('seaweed', 'assets/images/seaweed-small.png', 75, 300)

    this.load.image('rocks', 'assets/images/rocks.png')
    this.load.spritesheet('coin', 'assets/images/coin-temp.png')

    this.load.tilemap('cave', 'assets/maps/cave4.json', null, Phaser.Tilemap.TILED_JSON)
    this.load.image('snow-tiles', 'assets/maps/snow-tile.png')
    this.load.image('ocean', 'assets/images/ocean.png')
    this.load.image('cave', 'assets/images/cave.png')
  }

  create () {
    this.state.start('Game')
  }
}
