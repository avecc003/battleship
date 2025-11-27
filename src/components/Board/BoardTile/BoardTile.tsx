import clsx from "clsx";
import { getCoordinates } from "../utils.BoardTile";

type BoardTileProps = {
    number: number;
}

const BoardTile = ({ number }: BoardTileProps) => {
    const { x, y } = getCoordinates(number);

    const handleClick = () => {
        console.log(`Tile clicked at coordinates: (${x}, ${y})`);
    }

    return (
        <div 
            onClick={handleClick} 
            className= {clsx('bg-blue-400 hover:bg-blue-700 aspect-square w-12',
                'overflow-hidden border-r-2 border-b-2 cursor-pointer')}
        />
    )
}

export default BoardTile;
