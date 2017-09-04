/* globals __DEV__ */ // eslint-disable-line
import Phaser from 'phaser'
import Octopus from '../../sprites/Octopus/index'
import Coin from '../../sprites/Coin'
import Wall from '../../sprites/Wall'
import Coral from '../../sprites/Coral'
import Background from '../../sprites/Background'
import { makeBorderWalls, makeRandomCorals } from './makers'
import { makeCamera } from './camera'
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
    this.corals = this.game.add.group()
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
      corals: this.corals,
      walls: this.walls
    })

    makeCamera(this)
    makeRandomCorals(this)
    makeBorderWalls(this)
    setTimerActions(this)
  }

  makeCoral (x, y) {
    this.corals.add(new Coral({
      game: this.game,
      world: this.world,
      x,
      y
    }))
  }

  makeWall (x, y, destructable) {
    this.walls.add(new Wall({
      game: this.game,
      world: this.world,
      x,
      y,
      destructable
    }))
  }

  makeCoin () {
    this.coins.add(new Coin({ // eslint-disable-line
      game: this.game,
      world: this.world
    }))
  }

  update () {

  }

  render () {

  }
}
