import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Search from '../components/Search'
import {useState,useEffect} from 'react'
import Card1 from '../components/Card1'
import { Grid } from "@nextui-org/react";
import { Card, Col, Row, Button, Text } from "@nextui-org/react";

export default function Home(props) {

  const [searchResults,setSearchResults] = useState(null);
  

  return(
    <div>
      <Header/>
      <Search getResults={searchResults} setResults={setSearchResults}/>
      {searchResults && (
        <Grid.Container gap={3} justify="center">
            {searchResults.map((song) =>(
                <Grid xs={12} sm={2.5} key={song.result.id}>
                  <Card1 song={song}/>
                </Grid>
            ))}
         </Grid.Container>
      )}
      
    </div>
    
  )
}
