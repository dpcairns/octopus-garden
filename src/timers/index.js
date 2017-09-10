import Phaser from 'phaser'

export default (_this) => {
  _this.timer = _this.game.time.create(false)

  _this.timer.loop(2000, _this.makeCoin, _this)

  _this.timer.start()

  _this.game.time.events.add(Phaser.Timer.SECOND * 20, () => {
    const instructionsFade = _this.game.add.tween(_this.game.guideposts).to({ alpha: 0 }, 3000, Phaser.Easing.Linear.None, true)
    instructionsFade.onComplete.add(() => { _this.game.arrowKeys.destroy() })
  })

  _this.game.time.events.add(Phaser.Timer.SECOND * 5, () => {
    _this.game.crabs.setAll('body.bounce.x', 0.5)
    _this.game.crabs.setAll('body.bounce.y', 0.5)
  })
}
