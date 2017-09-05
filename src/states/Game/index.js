// /* globals __DEV__ */
import Phaser from 'phaser'
import Swipe from 'phaser-swipe'
import Octopus from '../../sprites/Octopus/index'
import Coin from '../../sprites/Gettables/Coin'
import Wall from '../../sprites/Obstacles/Wall'
import Crab from '../../sprites/Enemies/Crab'
import SquareThing from '../../sprites/Obstacles/SquareThing'
import Coral from '../../sprites/Decoration/Coral'
import Seaweed from '../../sprites/Decoration/Seaweed'
import {
  makeBorderWallsAndDecoration,
  makeRandomCorals,
  makeBackgrounds,
  makeCrabs
} from './makers'
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
    this.crabs = this.game.add.group()

    this.coins.add(new Coin({
      game: this.game,
      world: this.world
    }))

    this.octopus = new Octopus({
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
    makeCrabs(this)
    makeBorderWallsAndDecoration(this)
    setTimerActions(this)
  }

  makeSquareThing (x, y) {
    const newSquareThing = new SquareThing({
      game: this.game,
      world: this.world,
      x,
      y
    })

    this.squareThings.add(newSquareThing)
  }

  makeSeaweed (x, y) {
    const newSeaweed = new Seaweed({
      game: this.game,
      world: this.world,
      x,
      y
    })

    this.seaweeds.add(newSeaweed)
  }

  makeCoral (x, y) {
    const newCoral = new Coral({
      game: this.game,
      world: this.world,
      x,
      y
    })

    this.corals.add(newCoral)
  }

  makeWall (x, y, destructable) {
    const newWall = new Wall({
      game: this.game,
      world: this.world,
      x,
      y,
      destructable
    })

    this.walls.add(newWall)
  }

  makeCoin () {
    const newCoin = new Coin({
      game: this.game,
      world: this.world
    })

    this.coins.add(newCoin)
  }

  makeCrab (x, y) {
    const newCrab = new Crab({
      game: this.game,
      world: this.world,
      x,
      y
    })

    this.crabs.add(newCrab)
  }

  update () {

  }

  render () {

  }
}
