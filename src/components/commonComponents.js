import styled from "styled-components";

const BOADER = `1px solid rgb(140, 140, 140)`;
const BOADER_RADIUS = `4px`;

export const WholeWrapper = styled.div`
    width: 100%;
    height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Wrapper = styled.div`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    border: ${BOADER};
    border-radius: ${BOADER_RADIUS};

    display: flex;
    flex-direction: ${(props) => props.direction};
    
    ${(props) => props.isData && `
        transition : 0.5s;
        cursor : pointer;

        &:hover {
            background : rgb(180, 180, 180);
            color : #fff;
        }
    `}
`;


export const Column = styled.div`
    width: ${(props) => props.width};
    height: 25px;
    transition: 0.5s;
    cursor: pointer;

    ${(props) => props.isHead
        ? `background: #222f3e;
    color: #fff;
    line-height: 25px;
    text-align: center;`
        : `line-height: 25px;
    text-align: center;
    border-bottom: ${BOADER};`}


`;