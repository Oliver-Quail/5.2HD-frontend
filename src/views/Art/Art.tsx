import VIEWS from "@/misc/VIEWS";
import type { artefact } from "@/types/artefact";
import { useEffect, useState } from "react";
import { Link } from "react-router";


const Art = () => {

    const currentUrl = window.location.href;

    const [artefact, setArtefact] = useState<artefact | null>();
    
    useEffect(() => {

        var id = currentUrl.split("/")[currentUrl.split("/").length -1];
        console.log(id);
        if(artefact == null) {
            fetch("/api/artefact/" + id, {method: "GET"}).then((response :Response) => {
                response.json().then((jsonData) => {
                    console.log(jsonData);
                    setArtefact(jsonData as artefact);
                });
            });
        }
    });

    return (
        <section>
            <h1>Art</h1>
            <section className="flex w-full">
                <section className="w-[30%]">
                    <img src={"../../" + artefact?.picture} className="w-full"/>
                </section>
                <aside>
                    <h1>{artefact?.name}</h1>
                    <h2>By <Link className="text-violet-950" to={VIEWS.ARTIST + "\/" + artefact?.artist.id}>{artefact?.artist?.name}</Link></h2>
                    <p>{artefact?.description}</p>
                </aside>
            </section>
        </section>
    )
}

export default Art;