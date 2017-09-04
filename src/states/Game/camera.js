import Phaser from 'phaser'

export const makeCamera = (_this) => {
  _this.game.camera.follow(_this.octopus, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1)
}
