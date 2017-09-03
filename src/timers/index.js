export default (_this) => {
  _this.timer = _this.game.time.create(false)

  _this.timer.loop(3000, _this.makeCoin, _this)

  _this.timer.start()
}
