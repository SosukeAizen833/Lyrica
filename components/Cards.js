function Cards(props){
    let cards = props.songObjects
    
    if(cards){
        for(let i=0;i<cards.length;i++){
            cards[i] = <div>{cards[i]['result']['title']}</div>
        }
    }
    
    return(
        <div>
            
        </div>
    )
}
export default Cards;