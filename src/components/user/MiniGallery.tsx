import type { piece } from "@/types/piece";
import PictureCardRow from "./PictureCardRow";
import { useEffect, useState } from "react";


interface miniGalleryProps {
    pieces :piece[];
    numberOfItems :number;
}

const MiniGallery = (props :miniGalleryProps) => {


    const [pieces, setPieces] = useState<piece[][]>([]);

    useEffect(() => {
        let temp :piece[] = [];
        let newPieceArray :piece[][] = [];
        
        let index = 0;

        while(index < props.pieces.length) {
            temp.push(props.pieces[index]);
            
            if(index%props.numberOfItems) {
                newPieceArray.push(temp);
                temp = [];
            }
            else if (index + 1 == props.pieces.length) {
                newPieceArray.push(temp);
            }
            
            index++;
        }


        setPieces(newPieceArray);

    }, []);


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