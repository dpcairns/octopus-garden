export const disableCollisionIfDead = (mover, obstacle) => { if (obstacle.HP <= 0) return false }

export const rotate = (_this, degrees) => _this.game.add.tween(_this).to({ angle: _this.angle + degrees }, 100, 'Linear', true)
