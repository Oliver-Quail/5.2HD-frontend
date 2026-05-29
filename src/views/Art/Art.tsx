import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Comment from "@/components/user/Comment";
import VIEWS from "@/misc/VIEWS";
import type { artefact } from "@/types/artefact";
import type{ comment } from "@/types/comment";
import { useEffect, useState } from "react";
import { Link } from "react-router";


const Art = () => {

    const currentUrl = window.location.href;

    const [artefact, setArtefact] = useState<artefact | null>();
    const [comments, setComments] = useState<comment[]>([]);
    const [hasLogginedin, setHasLoggedin] = useState<boolean>(false);
    
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
        if(comments.length == 0) {
            //"comment/{id}/artefact"
            fetch("/api/comment/" + id +"/artefact", {method: "GET"}).then((response :Response) => {
                response.json().then((jsonData) => {
                    console.log(jsonData);
                    if(jsonData.length == 0) {
                        return
                    }
                    setComments(jsonData as comment[]);
                });
            });
        }
        if(localStorage.getItem("token") != null) {
            setHasLoggedin(true);
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
            <section>
                <h2>Comments</h2>
                <section className="flex flex-col">
                    {
                        comments.map(line => {
                            return (
                                <Comment commentDetails={line} />
                            )
                        })
                    }
                </section>
                <section className="w-8/10 mx-auto">
                {
                    hasLogginedin ? (                    
                    <section className="my-5">
                        <Textarea />
                        <Button className="ml-auto block" onClick={() => {

                        }}>Post</Button>
                    </section>) : (
                    <section className="h-full w-full flex justify-center items-center my-5">
                        <section>
                            <p className="mx-auto">Login to comment</p>
                            <Link to={VIEWS.LOGIN} className="mx-auto block w-full"><Button className="mx-auto w-full">Login</Button></Link>
                        </section>
                    </section>
                    )
                }
                </section>
            </section>
        </section>
    )
}

export default Art;