import Phaser from 'phaser'

export default (_this) => {
  _this.A = _this.game.input.keyboard.addKey(Phaser.KeyCode.A)
  _this.S = _this.game.input.keyboard.addKey(Phaser.KeyCode.S)
  _this.D = _this.game.input.keyboard.addKey(Phaser.KeyCode.D)
  _this.F = _this.game.input.keyboard.addKey(Phaser.KeyCode.F)
  _this.COLON = _this.game.input.keyboard.addKey(Phaser.KeyCode.COLON)
  _this.L = _this.game.input.keyboard.addKey(Phaser.KeyCode.L)
  _this.K = _this.game.input.keyboard.addKey(Phaser.KeyCode.K)
  _this.J = _this.game.input.keyboard.addKey(Phaser.KeyCode.J)
  _this.LEFT = _this.game.input.keyboard.addKey(Phaser.KeyCode.LEFT)
  _this.RIGHT = _this.game.input.keyboard.addKey(Phaser.KeyCode.RIGHT)
  _this.DOWN = _this.game.input.keyboard.addKey(Phaser.KeyCode.DOWN)
  _this.UP = _this.game.input.keyboard.addKey(Phaser.KeyCode.UP)
  _this.SPACEBAR = _this.game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR)
  _this.Z = _this.game.input.keyboard.addKey(Phaser.KeyCode.Z)
  _this.X = _this.game.input.keyboard.addKey(Phaser.KeyCode.X)

  const canvas = document.getElementsByTagName('canvas')[0]
  canvas.addEventListener('touchstart', _this.mobileTapped, false)
  canvas.addEventListener('touchend', _this.mobileUntapped, false)

  _this.A.onDown.add(_this.incrementLeft, _this)
  _this.S.onDown.add(_this.incrementLeft, _this)
  _this.D.onDown.add(_this.incrementLeft, _this)
  _this.F.onDown.add(_this.incrementLeft, _this)
  _this.COLON.onDown.add(_this.incrementRight, _this)
  _this.L.onDown.add(_this.incrementRight, _this)
  _this.K.onDown.add(_this.incrementRight, _this)
  _this.J.onDown.add(_this.incrementRight, _this)
}
