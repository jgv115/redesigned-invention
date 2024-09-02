import { Card, CardContent, CardActions, Button } from "@mui/material"
import "./JokeCard.css";
export const JokeCard = () => {
    return <Card className="jokecard">
        <CardContent>
            Joke content
        </CardContent>
        <CardActions >
            <Button size="small">Delete Joke</Button>
        </CardActions>
    </Card>
}