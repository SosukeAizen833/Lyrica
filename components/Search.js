import styles from '../styles/Search.module.css'
import {useState} from 'react'
import axios from 'axios'

function Search(props){
    const [title,setTitle] = useState("Red Hot Chili Peppers")
    const getResults =async ()=>{
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
                <input type="text" 
                    placeholder="Wet Sand"
                    name="lyrics-search" 
                    className={styles.searchbar}
                    onChange={(e) =>{
                        setTitle(e.target.value)
                        props.setResults(null);
                    }}
                    />
                
                
                <button type="submit" className={styles.searchbtn}>Find</button>
            </form>
            
        </div>
    )
}

export default Search