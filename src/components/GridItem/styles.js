import styled from "styled-components";

export const Tr = styled.tr``;

export const Td = styled.td`
    padding: 15px;
    text-align: ${(props) => (props.alingCenter ? "center" : "start")};
    word-break: break-all;

svg {
    cursor: pointer;
    width: 18px;
    height: 18px;
}
`;