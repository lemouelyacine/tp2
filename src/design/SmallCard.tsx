import styled from "@emotion/styled";

function SmallCard({id, name, url, description}: {id: string, name: string, url: string, description: string } ) {

    const SmallCardDiv = styled("div")(({customStyle}:{customStyle:object}) => ({
        flexShrink: 0,
        borderRadius: "20px",
        background: "#383838",
        margin: "10px",
    }))

    return (
        <SmallCardDiv className={id}>
            <img src={url} style={{width:"319px", height:"328px"}}/>
            <h1>{name}</h1>
            <p>{description}</p>
        </SmallCardDiv>
    )
}

export default SmallCard





