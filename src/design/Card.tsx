import styled from "@emotion/styled";


export const Card = styled("div")(({customStyle}:{customStyle:object}) => ({
    width: "673px",
    height: "499px",
    flexShrink: 0,
    borderRadius: "20px",
    background: "#383838",
    ...customStyle
}))




