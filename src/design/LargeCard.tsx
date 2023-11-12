import styled from "@emotion/styled";
import Avatar from "./Avatar";

interface LargeCardProps {
  id: string;
  name: string;
  url: string;
  description: string;
}

function LargeCard({ id, name, url, description }: LargeCardProps) {
  const LargeCardDiv = styled("div")({
    display: "flex",
    borderRadius: "20px",
    background: "#383838",
    margin: "10px",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  });

  const AvatarContainer = styled("div")({
    flex: "1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
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
    <LargeCardDiv className={id}>

      <AvatarContainer>
        <Avatar imageUrl={url} size="300px"></Avatar>
      </AvatarContainer>
      <TextContainer>
        <h2>{name}</h2>
        <p>{description}</p>
      </TextContainer>
    </LargeCardDiv>
  );
}

export default LargeCard;
