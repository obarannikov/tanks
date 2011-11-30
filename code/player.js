/**
 * Player Class
 *
 * @param world TileMapWorld Object
 */
function Player(world) {

    this.sprite = new Sprite('./graphics/tank.png');
    this.world = world;
    this._x = 0;
    this._y = 0;
    this.size = 11;
    this.sprite.angle = this.world.WORLD_ROATATION_UP;

    this.draw = function() {

        this.sprite.draw(this.world.canvas);

    }

    this.canMove = function(x, y) {

        var p = [];
        p[1] = {
            x:Math.floor((x - this.size) / this.world.tileSize),
            y:Math.floor((y - this.size) / this.world.tileSize)
        },
        p[2] = {
            x:Math.floor((x) / this.world.tileSize),
            y:Math.floor((y - this.size) / this.world.tileSize)
        };
        p[3] = {
            x:Math.floor((x + this.size) / this.world.tileSize),
            y:Math.floor((y - this.size) / this.world.tileSize)
        };
        p[4] = {
            x:Math.floor((x + this.size) / this.world.tileSize),
            y:Math.floor((y) / this.world.tileSize)
        };
        p[5] = {
            x:Math.floor((x + this.size) / this.world.tileSize),
            y:Math.floor((y + this.size) / this.world.tileSize)
        };
        p[6] = {
            x:Math.floor((x) / this.world.tileSize),
            y:Math.floor((y + this.size) / this.world.tileSize)
        };
        p[this.size] = {
            x:Math.floor((x - this.size) / this.world.tileSize),
            y:Math.floor((y + this.size) / this.world.tileSize)
        };
        p[8] = {
            x:Math.floor((x - this.size) / this.world.tileSize),
            y:Math.floor((y) / this.world.tileSize)
        };

        for (idx in p) {

            if (!this.world.canMoveInto(p[idx].x, p[idx].y)) {

                return false;

            }

        }

        return true;

    }

    this.move = function(direction) {

        this.rotate(direction);

        switch (direction) {

            case 'Up':
                if (this.canMove(this._x, this._y - 1)) {
                    this.setPosition(this._x, this._y - 1);
                }
                break;

            case 'Down':
                if (this.canMove(this._x, this._y + 1)) {
                    this.setPosition(this._x, this._y + 1);
                }
                break;

            case 'Left':
                if (this.canMove(this._x - 1, this._y)) {
                    this.setPosition(this._x - 1, this._y);
                }
                break;

            case 'Right':
                if (this.canMove(this._x + 1, this._y)) {
                    this.setPosition(this._x + 1, this._y);
                }
                break;
        }

    }

    this.setPosition = function(x, y) {

        this._x = x;
        this._y = y;
        this.sprite.x = x;
        this.sprite.y = y;

    }

    this.rotate = function(angle) {

        switch (angle) {

            case 'Up':
                this.sprite.angle = world.WORLD_ROATATION_UP;
                break;

            case 'Down':
                this.sprite.angle = world.WORLD_ROATATION_DOWN;
                break;

            case 'Left':
                this.sprite.angle = world.WORLD_ROATATION_LEFT;
                break;

            case 'Right':
                this.sprite.angle = world.WORLD_ROATATION_RIGHT;
                break;

            default:
                this.sprite.angle = angle;

        }

    }

}