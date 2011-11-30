function TileMapWorld(canvas) {

    this.canvas = canvas;
    this.WORLD_ROATATION_UP = Math.PI * 1.5;
    this.WORLD_ROATATION_DOWN = Math.PI / 2;
    this.WORLD_ROATATION_LEFT = Math.PI;
    this.WORLD_ROATATION_RIGHT = 0;

    this.tileSize = 33;

    this.map = [[1, 1, 1, 4, 0, 0, 1, 1, 0, 0],
               [1, 0, 1, 4, 1, 0, 1, 2, 0, 1],
               [1, 0, 1, 4, 1, 0, 1, 2, 0, 1],
               [1, 0, 0, 0, 0, 1, 1, 1, 0, 1],
               [1, 3, 3, 1, 0, 4, 4, 5, 0, 0],
               [3, 0, 0, 1, 0, 1, 1, 5, 0, 0],
               [1, 0, 0, 0, 0, 1, 1, 5, 0, 0],
               [1, 1, 0, 1, 0, 1, 0, 5, 0, 0],
               [0, 0, 0, 1, 0, 0, 0, 5, 0, 0],
               [1, 1, 0, 2, 1, 1, 1, 2, 1, 1]]

    this.canMoveInto = function(x, y) {

        if ((this.map[y][x] != 0)&&(this.map[y][x] != 4)&&(this.map[y][x] != 5)) {

            return false;

        }

        return true;

    }

}