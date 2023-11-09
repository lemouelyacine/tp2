import './Home.css'
import styled from "@emotion/styled";
import characters from "../../assets/characters.json";
import SmallCard from "../../design/SmallCard.tsx";

function Home({connectUser}: {connectUser: () => void} ) {
    const Grid = styled("div")`
      display: grid;
      grid-template-columns: repeat(4, 0.5fr);
      grid-template-areas: 
        "id0 id1 id2 id2"
        "id3 id3 id2 id2"
        "id4 id5 id6 id7"
    ;
    `
  return (
     <Grid>
         {characters.map((character) => {
            return (
                <SmallCard
                    key={character.id}
                    name={character.name}
                    url={character.imageUrl}
                    id={character.id}
                    description={character.description}>
                </SmallCard>
            )
         })}
     </Grid>
  )
}

export default Home
