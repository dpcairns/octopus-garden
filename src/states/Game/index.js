/* globals __DEV__ */ // eslint-disable-line
import Phaser from 'phaser'
import Octopus from '../../sprites/Octopus/index'
import Coin from '../../sprites/Gettables/Coin'
import Wall from '../../sprites/Obstacles/Wall'
import SquareThing from '../../sprites/Obstacles/SquareThing'
import Coral from '../../sprites/Decoration/Coral'
import Seaweed from '../../sprites/Decoration/Seaweed'
import OceanBG from '../../sprites/Decoration/OceanBG'
import CaveBG from '../../sprites/Decoration/CaveBG'
import { makeBorderWallsAndDecoration, makeRandomCorals } from './makers'
import { makeCamera } from './camera'
import setTimerActions from '../../timers/index'

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    this.score = 0

    this.game.world.setBounds(0, 0, 2500, 1500)

    new CaveBG({ // eslint-disable-line
      game: this.game
    })

    new OceanBG({ // eslint-disable-line
      game: this.game
    })

    this.game.physics.arcade.gravity.y = 10

    this.coins = this.game.add.group()
    this.squareThings = this.game.add.group()
    this.seaweeds = this.game.add.group()
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
      squareThings: this.squareThings,
      walls: this.walls
    })

    makeCamera(this)
    makeRandomCorals(this)
    makeBorderWallsAndDecoration(this)
    setTimerActions(this)
  }

  makeSquareThing (x, y) {
    this.squareThings.add(new SquareThing({
      game: this.game,
      world: this.world,
      x,
      y
    }))
  }

  makeSeaweed (x, y) {
    this.seaweeds.add(new Seaweed({
      game: this.game,
      world: this.world,
      x,
      y
    }))
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
