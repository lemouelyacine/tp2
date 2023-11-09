import styled from "@emotion/styled";

export const Button = styled("button")(({customStyle}:{customStyle:object}) => ({
    backgroundColor: "#D9D9D9",
    borderRadius: "20px",
    ...customStyle
}))
