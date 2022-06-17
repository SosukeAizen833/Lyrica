import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Search from '../components/Search'
import {useState,useEffect} from 'react'
import Card1 from '../components/Card1'
import { Grid } from "@nextui-org/react";


export default function Home(props) {

  const [searchResults,setSearchResults] = useState(null);
  const [loaing,setLoading] = useState(false);

  return(
    <div>
      <Header/>
      <Search getResults={searchResults} setResults={setSearchResults}/>
      {searchResults && (
        <div className={styles.cardContainer}>
          {searchResults.map((song) =>(
            <Grid.Container gap={2} justify="center">
              <Grid xs={12} sm={10}>
                <Card1 song={song}/>
              </Grid>
            </Grid.Container>
            
          ))}
        </div>
      )}
      
    </div>
    
  )
}
