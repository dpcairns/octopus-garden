/* globals __DEV__ */ // eslint-disable-line
import Phaser from 'phaser'
import Octopus from '../sprites/Octopus/index.js'
import Coin from '../sprites/Coin'

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    this.score = 0
    this.bannerText = 'Go dude go! '
    this.banner = this.add.text(this.world.centerX, this.game.height - 80, this.bannerText)
    this.banner.font = 'Bangers'
    this.banner.padding.set(10, 16)
    this.banner.fontSize = 40
    this.banner.fill = '#77BFA3'
    this.banner.smoothed = false
    this.banner.anchor.setTo(0.5)

    this.ocean = this.game.add.sprite(0, 0, 'ocean')
    this.ocean.width = 2000
    this.ocean.height = 1000
    this.game.world.setBounds(0, 0, 2000, 1000)
    this.game.add.existing(this.ocean)
    this.game.physics.arcade.gravity.y = 10

    this.octopus = new Octopus({ // eslint-disable-line
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY,
      world: this.world
    })

    this.game.camera.follow(this.octopus, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1)

    this.coins = this.game.add.group()

    this.coins.add(new Coin({ // eslint-disable-line
      game: this.game,
      world: this.world,
      loseScore: this.loseScore,
      banner: this.banner,
      bannerText: this.bannerText
    }))

    this.timer = this.game.time.create(false)

    this.timer.loop(3000, this.makeCoin, this)

    this.timer.start()
  }

  getCoin (dude, coin) {
    coin.destroy()
    this.score++
    this.banner.text = this.bannerText + this.score
  }

  loseScore () {
    this.score = 0
    this.banner.text = this.bannerText + this.score
  }

  makeCoin () {
    this.coins.add(new Coin({ // eslint-disable-line
      game: this.game,
      world: this.world,
      loseScore: this.loseScore,
      banner: this.banner,
      bannerText: this.bannerText
    }))
  }

  update () {
    this.game.physics.arcade.overlap(this.octopus, this.coins, this.getCoin.bind(this))
  }

  render () {

  }
}
