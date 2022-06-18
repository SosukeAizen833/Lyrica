import styles from '../styles/Search.module.css'
import {useState} from 'react'
import axios from 'axios'
import { Input } from "@nextui-org/react";
import { Button, Grid } from "@nextui-org/react";

function Search(props){
    const [title,setTitle] = useState("Red Hot Chili Peppers")
    const [loading,setLoading] = useState(false);
    const getResults =async ()=>{
        setLoading(true)
        const options = {
            method: 'GET',
            url: 'https://genius.p.rapidapi.com/search',
            params: {q: title},
            headers: {
                'X-RapidAPI-Key': '694c32b75dmsh32221dac2471acbp191645jsn6060e840fdd6',
                'X-RapidAPI-Host': 'genius.p.rapidapi.com'
            }
            };
        
            axios.request(options).then(async (response) =>{
                let songObjects = response.data.response.hits;
                props.setResults(songObjects)
                setLoading(false);
            }).catch(function (error) {
                console.error(error);
            });
        
    }

    return (
        <div className={styles.searchContainer}>
            <form onSubmit={(e) =>{
                e.preventDefault();
                e.stopPropagation();
                console.log("Event fired");
                getResults();
            }}>
                <Grid.Container gap={2}>
                    <Grid>
                    <Input type="text" 
                        placeholder="Wet Sand"
                        name="lyrics-search" 
                        className={styles.searchbar}
                        onChange={(e) =>{
                            setTitle(e.target.value)
                            props.setResults(null);
                        }}
                        />
                    </Grid>
                    <Grid>
                        <Button color="gradient" type="submit" auto>{loading ? "..." : "Find"}</Button>
                    </Grid>
                </Grid.Container>
            </form>
            
        </div>
    )
}

export default Search