import styled from "@emotion/styled";
import characters from "../../assets/characters.json";
import SmallCard from "../../design/SmallCard.tsx";
import LongCard from '../../design/LongCard.tsx';
import LargeCard from "../../design/LargeCard.tsx";
import "./Home.css"


function Home({ connectUser }: { connectUser: () => void }) {
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
        switch (character.cardType) {
          case "small":
            return (
              <SmallCard
                  key={character.id}
                  name={character.name}
                  url={character.imageUrl}
                  id={character.id}
                  description={character.description}
                  className={character.id}
                />
              )
            break;
          case "long":
            return (
              <LongCard
                  key={character.id}
                  name={character.name}
                  url={character.imageUrl}
                  id={character.id}
                description={character.description}
                className={character.id}
                />
              )
          case "large":
            return (
              <LargeCard
                  key={character.id}
                  name={character.name}
                  url={character.imageUrl}
                  id={character.id}
                  description={character.description}
                  className={character.id}
                />
            )
          
          default:
            break;
        }
      })}
    </Grid>
  );
}

export default Home;
