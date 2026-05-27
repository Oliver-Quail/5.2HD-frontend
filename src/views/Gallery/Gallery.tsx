import MiniGallery from "@/components/user/MiniGallery";
import type { artefact } from "@/types/artefact";
import { useEffect, useState } from "react";


const Gallery = () => {

    const [artefacts, setArtefacts] = useState<artefact[]>([]);

    useEffect(() => {
        if(artefacts.length == 0) {
            fetch("/api/artefact", {method: "GET"}).then((response :Response) => {
                response.json().then((jsonData) => {
                    console.log(jsonData);
                    setArtefacts([...(jsonData as artefact[])]);

                });
            });
        }
        console.log(artefacts);
    });

    return (
        <section>
            <h1>Gallery</h1>
            <MiniGallery pieces={artefacts} numberOfItems={3} />
        </section>
    )
}

export default Gallery;