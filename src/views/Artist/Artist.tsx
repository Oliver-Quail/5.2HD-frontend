import type { artistDetails } from "@/types/artistDetails";
import { useEffect, useState } from "react";


const Artist = () => {

    const currentUrl = window.location.href;

    const [artist, setArtist] = useState<artistDetails | null>();
    
    useEffect(() => {

        var id = currentUrl.split("/")[currentUrl.split("/").length -1];
        console.log(id);
        if(artist == null) {
            fetch("/api/artist/" + id, {method: "GET"}).then((response :Response) => {
                response.json().then((jsonData) => {
                    console.log(jsonData);
                    setArtist(jsonData as artistDetails);
                });
            });
        }
    });

    return (
        <section>
            <h1>Artist</h1>
            <section className="flex w-full">
                <section className="w-[30%]">
                    <img src={"../../" + artist?.picture} className="w-full"/>
                </section>
                <aside>
                    <h1>{artist?.name}</h1>

                </aside>
            </section>
            <section className="w-full">
                <h2>My work</h2>

            </section>

        </section>
    )
}

export default Artist;