import MiniGallery from "@/components/user/MiniGallery";
import type { artefact } from "@/types/artefact";
import type { piece } from "@/types/piece";
import { useEffect, useState } from "react";


const Gallery = () => {

    const [artefacts, setArtefacts] = useState<artefact[]>([]);

    useEffect(() => {
        if(artefacts.length == 0) {
            fetch("/api/artefact", {method: "GET"}).then((response :Response) => {
                response.json().then((jsonData) => {
                    console.log(jsonData);
                    setArtefacts(jsonData);
                });
            });
        }
    });


    const pieces :piece[] = [
        {
            image : "aaa",
            by : "Oliver Quail",
            id : 1
        },
        {
            image : "bbb",
            by : "Oliver Quail",
            id : 2
        },
        {
            image : "ccc",
            by : "Oliver Quail",
            id : 3
        },
        {
            image : "ddd",
            by : "Oliver Quail",
            id : 4
        },
        {
            image : "eee",
            by : "Oliver Quail",
            id : 5
        }
    ];

    return (
        <section>
            <p>Gallery</p>
            <MiniGallery pieces={pieces} numberOfItems={3} />
        </section>
    )
}

export default Gallery;