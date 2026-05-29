import type { comment } from "@/types/comment"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

interface commentProps {
    commentDetails :comment;
}

const Comment = (props :commentProps) => {


    return (
        <Card className="w-8/10 mx-auto">
            <CardHeader>
                <CardTitle>{props.commentDetails.user.name}</CardTitle>
                <CardDescription>{props.commentDetails.created_at}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>{props.commentDetails.text}</p>
            </CardContent>
        </Card>
    )
}

export default Comment;