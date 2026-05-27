import PictureCard from "./PictureCard";
import type { artefact } from "@/types/artefact";


interface pictureCardRowProps {
    pieces :artefact[];
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