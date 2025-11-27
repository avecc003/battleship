export const BOARD_SIZE = 10;

export const getCoordinates = (number: number) => {
    const COORDINATE_X = Math.floor(number % BOARD_SIZE);
    const COORDINATE_Y = Math.floor(number / BOARD_SIZE);
    return { x: COORDINATE_X, y: COORDINATE_Y };
}