import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import type { artefact } from "@/types/artefact";


interface pictureCardProps {
    piece :artefact;
}


const PictureCard = (props :pictureCardProps) => {
    
    return (
        <Card className="w-[25%]">
            <CardHeader>
                <CardTitle>{props.piece.name}</CardTitle>
            </CardHeader>
            <CardContent>
                <img src={props.piece.picture} />
            </CardContent>
        </Card>
    )
}

export default PictureCard;