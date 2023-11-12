import styled from "@emotion/styled";
import Avatar from "./Avatar";

function SmallCard({id, name, url, description}: {id: string, name: string, url: string, description: string } ) {

    const SmallCardDiv = styled("div")({
        borderRadius: "20px",
        background: "#383838",
        margin: "10px",
        display: "flex",
        flexDirection: "column"
    });

    const AvatarContainer = styled("div")({
        flex: "1",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
    });

    const TextContainer = styled("div")({
        padding: "20px",
        textAlign: "left",
        marginBottom: "5px"
    });

    return (
            <SmallCardDiv className={id}>
                <AvatarContainer>
                    <Avatar imageUrl={url} size="100px"></Avatar>
                </AvatarContainer>
                <TextContainer>
                    <h2>{name}</h2>
                    <p>{description}</p>
                </TextContainer>
            </SmallCardDiv>
    )
}

export default SmallCard




