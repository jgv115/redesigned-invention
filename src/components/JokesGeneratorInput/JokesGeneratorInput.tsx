import { Button, TextField } from "@mui/material";
import "./JokesGeneratorInput.css";

export const JokesGeneratorInput = () => {

    const generateJokes = () => {
        console.log('Generating jokes...');

    };

    return <div className="generatorInput">
        <TextField id="outlined-basic" label="Nunber of jokes" variant="outlined" type="number"/>
        <Button variant='contained' onClick={generateJokes}>Generate funny jokes</Button>
    </div>
}