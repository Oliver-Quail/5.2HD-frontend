import type { piece } from "@/types/piece";
import PictureCard from "./PictureCard";


interface pictureCardRowProps {
    pieces :piece[];
}

const PictureCardRow = (props :pictureCardRowProps) => {

    return (
        <section className="flex justify-around w-full">
            {
                props.pieces.map((line) => {

                    return (
                        <PictureCard piece={line}  />
                    )
                })
            }
        </section>

    )
    
}

export default PictureCardRow;