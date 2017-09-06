export const makeGroups = (_this) => {
  _this.game.coins = _this.game.add.group()
  _this.game.shells = _this.game.add.group()
  _this.game.seaweeds = _this.game.add.group()
  _this.game.inkMissiles = _this.game.add.group()
  _this.game.corals = _this.game.add.group()
  _this.game.walls = _this.game.add.group()
  _this.game.crabs = _this.game.add.group()

  _this.game.guideposts = _this.game.add.group()
  _this.game.guideposts.addMultiple([
    _this.game.instructions,
    _this.game.mobileInstructions,
    _this.game.arrowKeys,
    _this.game.mobile
  ])

  _this.game.protagonistParts = _this.game.add.group()

  // add protagonsit and extensions thereof
  _this.game.protagonistParts.addMultiple([
    _this.game.octopus,
    _this.game.inkMissiles
  ])

  // add decorations
  _this.game.decorations = _this.game.add.group()
  _this.game.decorations.addMultiple([
    _this.game.seaweeds,
    _this.game.corals
  ])

  // add obstacles
  _this.game.obstacles = _this.game.add.group()
  _this.game.obstacles.addMultiple([
    _this.game.shells,
    _this.game.walls
  ])

  // add enemies
  _this.game.enemies = _this.game.add.group()
  _this.game.enemies.addMultiple([
    _this.game.shells,
    _this.game.crabs
  ])
}
