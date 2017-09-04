/* globals __DEV__ */ // eslint-disable-line
import Phaser from 'phaser'
import Swipe from 'phaser-swipe'
import Octopus from '../../sprites/Octopus/index'
import Coin from '../../sprites/Gettables/Coin'
import Wall from '../../sprites/Obstacles/Wall'
import SquareThing from '../../sprites/Obstacles/SquareThing'
import Coral from '../../sprites/Decoration/Coral'
import Seaweed from '../../sprites/Decoration/Seaweed'
import { makeBorderWallsAndDecoration, makeRandomCorals, makeBackgrounds } from './makers'
import { makeCamera } from './camera'
import setTimerActions from '../../timers/index'

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    this.score = 0
    this.game.world.setBounds(0, 0, 2500, 1500)
    this.game.physics.arcade.gravity.y = 10
    this.swipe = new Swipe(this.game)

    makeBackgrounds(this)

    this.coins = this.game.add.group()
    this.squareThings = this.game.add.group()
    this.seaweeds = this.game.add.group()
    this.corals = this.game.add.group()
    this.walls = this.game.add.group()

    window.screen.orientation.onchange = () => {
      this.game.angleOverride = window.screen.orientation.angle
    }

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
      walls: this.walls,
      swipe: this.swipe
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
