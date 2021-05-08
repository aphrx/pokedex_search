import styled, { keyframes } from 'styled-components';

export const ProgressContainer = styled.div`
    margin-top: 5px;
    width: 300px;
    text-align: left;
`;

const progress = keyframes`
    0% {
        width: 0%;
        background: #f9bcca;
    }
    ${props => props.percent}% {
        width:  ${props => props.percent};
        background: #FF5252;
    }
`;

export const ProgressMoved = styled.div`
    border-radius: 30px;
    background-color: #FF5252;
    width: ${props => props.percent};
    animation: ${progress} 10s;
    
`;

export const ProgressBar = styled.div` 
    height: 10px;
    border-radius: 10px;
    transition: .4s linear;
`;

export const ProgressName = styled.p`
    color: #000;
    text-align: left;
`;

export const ProgressDir = styled.p`
    color: #000;
    text-align: right;
`;

export const ProgressStats = styled.p`
    color: #fff;
    text-align: left;
    display: grid;
    grid-template-columns: 1fr 5fr 1fr;
`;

export const ProgressLoader = styled.div`
    position: absolute;
    background: #121212;
`;