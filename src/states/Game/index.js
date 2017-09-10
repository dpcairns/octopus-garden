// /* globals __DEV__ */
import Phaser from 'phaser'
import Swipe from 'phaser-swipe'
import Octopus from '../../sprites/Octopus/index'
import Instructions from '../../sprites/Texts/Instructions'
import MobileInstructions from '../../sprites/Texts/MobileInstructions'
import Coin from '../../sprites/Gettables/Coin'
import Rocks from '../../sprites/Obstacles/Rocks'
import Crab from '../../sprites/Enemies/Crab'
import Shell from '../../sprites/Obstacles/Shell'
import Coral from '../../sprites/Decoration/Coral'
import Vine from '../../sprites/Decoration/Vine'
import Seaweed from '../../sprites/Decoration/Seaweed'
import {
  makeBorderRocksAndDecoration,
  makeRandomShells,
  makeCrabs
} from './makers'
import { makeGroups } from './groups'
import { makeCamera } from './camera'
import setTimerActions from '../../timers/index'

export default class extends Phaser.State {
  init () {}
  preload () {
    this.game.physics.arcade.TILE_BIAS = 3000
    this.caveMap = this.game.add.tilemap('cave')
    this.caveMap.addTilesetImage('snow-tileset', 'snow-tiles')
    this.caveMap.addTilesetImage('ocean-bg', 'ocean')
    this.caveMap.addTilesetImage('cave-bg', 'cave')
    this.caveMap.addTilesetImage('rocks', 'rocks')
    this.caveMap.addTilesetImage('rock2', 'rocks')
    this.caveMap.setCollisionByExclusion([], true, 'cave2')

    this.bgLayer = this.caveMap.createLayer('bg')
    this.caveLayer = this.caveMap.createLayer('cave2')
    this.game.caveLayer = this.caveLayer
  }

  create () {
    this.score = 0
    this.game.world.setBounds(0, 0, 2500, 1500)
    this.game.physics.arcade.gravity.y = 10
    this.swipe = new Swipe(this.game)

    this.octopus = new Octopus({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY,
      world: this.world,
      score: this.score,
      swipe: this.swipe
    })

    this.game.instructions = new Instructions({
      game: this.game,
      world: this.world,
      text: 'Arrow keys to move and change speed.\nX or Ctrl to shoot.\nHold spacebar to charge.\nZ to stop.'
    })

    this.game.mobileInstructions = new MobileInstructions({
      game: this.game,
      world: this.world,
      text: 'Swipe to rotate. \nOne finger to shoot. \nTwo fingers to charge.'
    })

    this.game.octopus = this.octopus

    makeGroups(this)
    this.caveLayer.resizeWorld()
    makeCamera(this)
    makeRandomShells(this)
    makeCrabs(this)
    makeBorderRocksAndDecoration(this)
    setTimerActions(this)
  }

  makeShell (x, y) {
    const newShell = new Shell({
      game: this.game,
      world: this.world,
      x,
      y
    })

    this.game.shells.add(newShell)
  }

  makeSeaweed (x, y) {
    const newSeaweed = new Seaweed({
      game: this.game,
      world: this.world,
      x,
      y
    })

    this.game.seaweeds.add(newSeaweed)
  }

  makeCoral (x, y) {
    const newCoral = new Coral({
      game: this.game,
      world: this.world,
      x,
      y
    })

    this.game.corals.add(newCoral)
  }

  makeRocks (x, y, destructable, vertical) {
    const newRocks = new Rocks({
      game: this.game,
      world: this.world,
      x,
      y,
      destructable,
      vertical
    })

    this.game.rocks.add(newRocks)
  }

  makeCoin () {
    const newCoin = new Coin({
      game: this.game,
      world: this.world
    })

    this.game.coins.add(newCoin)
  }

  makeCrab (x, y) {
    const newCrab = new Crab({
      game: this.game,
      world: this.world,
      x,
      y
    })

    this.game.crabs.add(newCrab)
  }

  makeVine (x, y) {
    const newVine = new Vine({
      game: this.game,
      world: this.world,
      x,
      y
    })

    this.game.crabs.add(newVine)
  }

  update () {

  }

  render () {

  }
}
