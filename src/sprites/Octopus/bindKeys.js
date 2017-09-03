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

  _this.A.onDown.add(_this.incrementLeft, _this)
  _this.S.onDown.add(_this.incrementLeft, _this)
  _this.D.onDown.add(_this.incrementLeft, _this)
  _this.F.onDown.add(_this.incrementLeft, _this)
  _this.COLON.onDown.add(_this.incrementRight, _this)
  _this.L.onDown.add(_this.incrementRight, _this)
  _this.K.onDown.add(_this.incrementRight, _this)
  _this.J.onDown.add(_this.incrementRight, _this)
}
