import { Link } from "react-router";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import type { artefact } from "@/types/artefact";
import VIEWS from "@/misc/VIEWS";


interface pictureCardProps {
    piece :artefact;
}


const PictureCard = (props :pictureCardProps) => {
    
    return (
        <Card className="w-[25%] my-2">
            <CardHeader>
                <CardTitle>{props.piece.name}</CardTitle>
            </CardHeader>
            <CardContent>
                <img src={props.piece.picture} />
            </CardContent>
            <CardFooter>
                <Link to={VIEWS.ART + "\/" + props.piece.id}>View</Link>
            </CardFooter>
        </Card>
    )
}

export default PictureCard;