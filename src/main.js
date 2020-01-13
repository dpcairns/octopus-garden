import 'pixi'
import 'p2'
import Phaser from 'phaser'
import BootState from './states/Boot'
import SplashState from './states/Splash'
import GameState from './states/Game/index'

// import configuration from './config'

class Game extends Phaser.Game {
  constructor() {
    const docElement = document.documentElement
    const maxWidth = 1400
    const maxHeight = 1200
    const width = docElement.clientWidth > maxWidth ? maxWidth : docElement.clientWidth
    const height = docElement.clientHeight > maxHeight ? maxHeight : docElement.clientHeight

    super(width, height, Phaser.CANVAS, 'content', null)

    this.state.add('Boot', BootState, false)
    this.state.add('Splash', SplashState, false)
    this.state.add('Game', GameState, false)

    this.state.start('Boot')
  }
}

window.game = new Game()
