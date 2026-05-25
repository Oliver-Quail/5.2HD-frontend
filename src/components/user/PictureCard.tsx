import type { piece } from "@/types/piece";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import convertToSRC from "@/misc/imageConverter";


interface pictureCardProps {
    piece :piece;
}


const PictureCard = (props :pictureCardProps) => {

    return (
        <Card>
            <CardHeader>
                <CardTitle>{props.piece.id}</CardTitle>
            </CardHeader>
            <CardContent>
                <img src={convertToSRC(props.piece.image)} />
            </CardContent>
        </Card>
    )
}

export default PictureCard;