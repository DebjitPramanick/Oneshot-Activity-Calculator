import styled from "styled-components";
import { colors } from "./Colors";

export const Text = styled.p`
    font-style: normal;
    font-size: 16px;
    letter-spacing: -0.02em;
    color: ${colors.text};
    text-overflow: ellipsis;
    overflow: hidden;

    span {
        color: #7e7e7e;
    }
`
export const SmallText = styled.p`
    font-style: normal;
    font-size: 14px;
    letter-spacing: -0.02em;
    color: ${colors.text};
    text-overflow: ellipsis;
    overflow: hidden;
`

export const Heading = styled.h1`
    font-style: normal;
    font-size: 40px;
    letter-spacing: -0.02em;
    color: ${colors.text};
    text-overflow: ellipsis;
    overflow: hidden;
`

export const SubHeading = styled.h1`
    font-style: normal;
    font-size: 24px;
    letter-spacing: -0.02em;
    color: ${colors.text};
    text-overflow: ellipsis;
    overflow: hidden;
`