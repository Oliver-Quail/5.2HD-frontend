import MiniGallery from "@/components/user/MiniGallery";
import type { piece } from "@/types/piece";


const Gallery = () => {

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