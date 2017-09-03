/* globals __DEV__ */ // eslint-disable-line
import Phaser from 'phaser'
import Octopus from '../../sprites/Octopus/index'
import Coin from '../../sprites/Coin'
import Wall from '../../sprites/Wall'
import Background from '../../sprites/Background'
import setTimerActions from '../../timers/index'

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    this.score = 0

    this.background = new Background({
      game: this.game,
      asset: 'ocean'
    })

    this.game.world.setBounds(0, 0, 2000, 1000)

    this.game.physics.arcade.gravity.y = 10

    this.coins = this.game.add.group()
    this.walls = this.game.add.group()

    this.coins.add(new Coin({ // eslint-disable-line
      game: this.game,
      world: this.world
    }))

    this.octopus = new Octopus({ // eslint-disable-line
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY,
      world: this.world,
      coins: this.coins,
      score: this.score,
      walls: this.walls
    })

    this.game.camera.follow(this.octopus, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1)

    for (let i = 0; i < 50; i++) {
      this.makeWall((() => Math.random() * this.world.width)(), (() => Math.random() * this.world.height)())
    }

    setTimerActions(this)

    this.filter = new Phaser.Filter(this.game, null, this.game.cache.getShader('cells'))

    this.filter.addToWorld(0, 0, 800, 600)
  }

  makeWall (x, y) {
    this.walls.add(new Wall({
      game: this.game,
      world: this.world,
      x,
      y
    }))
  }

  makeCoin () {
    this.coins.add(new Coin({ // eslint-disable-line
      game: this.game,
      world: this.world
    }))
  }

  update () {
    this.filter.update()
  }

  render () {

  }
}
