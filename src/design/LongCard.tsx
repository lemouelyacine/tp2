import styled from "@emotion/styled";
import Avatar from "./Avatar";

interface LongCardProps {
  id: string;
  name: string;
  url: string;
  description: string;
}

function LongCard({ id, name, url, description }: LongCardProps) {
  const LongCardDiv = styled("div")({
    display: "flex",
    borderRadius: "20px",
    background: "#383838",
    margin: "10px",
  });

  const AvatarContainer = styled("div")({
    flex: "1",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  });

  const TextContainer = styled("div")({
      padding: "20px",
      textAlign: "left",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
    marginBottom: "5px"
  });

  return (
    <LongCardDiv className={id}>

      <TextContainer>
        <h2>{name}</h2>
        <p>{description}</p>
      </TextContainer>
      <AvatarContainer>
        <Avatar imageUrl={url} size="200px"></Avatar>
      </AvatarContainer>
    </LongCardDiv>
  );
}

export default LongCard;
