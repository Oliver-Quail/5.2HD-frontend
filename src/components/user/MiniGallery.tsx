import PictureCardRow from "./PictureCardRow";
import { useEffect, useState } from "react";
import type { artefact } from "@/types/artefact";


interface miniGalleryProps {
    pieces :artefact[];
    numberOfItems :number;
}

const MiniGallery = (props :miniGalleryProps) => {


    const [pieces, setPieces] = useState<artefact[][]>([]);

    useEffect(() => {
        let temp :artefact[] = [];
        let newPieceArray :artefact[][] = [];
        let index = 0;

        while(index < props.pieces.length) {
            temp.push(props.pieces[index]);
            
            if((index +1)%props.numberOfItems == 0 && index != 0) {
                newPieceArray.push(temp);
                temp = [];
            }
            else if (index + 1 == props.pieces.length) {
                newPieceArray.push(temp);
            }
            
            index++;
        }

        console.log(newPieceArray);
        setPieces(newPieceArray);

    }, [props.pieces]);


    return (
        <section>
            {
                pieces.map((line, index) => {
                    return (
                        <PictureCardRow pieces={line} />
                    )
                })
            }
        </section>
    )

    
};

export default MiniGallery;