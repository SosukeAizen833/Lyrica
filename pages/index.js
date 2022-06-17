import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Search from '../components/Search'
import Cards from '../components/Cards'
import {useState,useEffect} from 'react'

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
            <div className={styles.card} key={song.result.id}>
              <div className={styles.cardBody}>
                <div className={styles.cardContent}>
                    <span >
                      <img className={styles.thumbnail} src={song.result.header_image_thumbnail_url}/>
                    </span>
                </div>
                <div className={styles.cardTitle}>
                  <p style={{margin: '5px 0px'}}>{song.result.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    
  )
}
