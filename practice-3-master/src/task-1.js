const NORTH = "north",
    EAST = "east",
    SOUTH = "south",
    WEST = "west";

class Rover {
    constructor(x = 0, y = 0, direction = NORTH) {
        if ((direction !== NORTH && direction !== EAST && direction !== SOUTH && direction !== WEST) ||
        !Number.isInteger(x) || !Number.isInteger(y)) {
            throw new TypeError("Wrong type!");
        }
        this.x = x;
        this.y = y;
        this.direction = direction;
    }

    left() {
        switch (this.direction) {
            case NORTH:
                this.direction = WEST;
                break;
            case WEST:
                this.direction = SOUTH;
                break;
            case SOUTH:
                this.direction = EAST;
                break;
            case EAST:
                this.direction = NORTH;
                break;
            default:
                break;
        }
        return this;
    }

    right() {
        switch (this.direction) {
            case NORTH:
                this.direction = EAST;
                break;
            case EAST:
                this.direction = SOUTH;
                break;
            case SOUTH:
                this.direction = WEST;
                break;
            case WEST:
                this.direction = NORTH;
                break;
            default:
                break;
        }
        return this;
    }

    move(n) {
        if (!Number.isInteger(n)) {
            throw new TypeError("Wrong type!");
        }
        switch (this.direction) {
            case NORTH:
                this.y += n;
                break;
            case EAST:
                this.x += n;
                break;
            case SOUTH:
                this.y -= n;
                break;
            case WEST:
                this.x -= n;
                break;
            default:
                break;
        }
        return this;
    }

    getPosition() {
        return {
            x: this.x,
            y: this.y
        };
    }

    getDirection() {
        return this.direction;
    }
}

export { NORTH, EAST, SOUTH, WEST, Rover };

