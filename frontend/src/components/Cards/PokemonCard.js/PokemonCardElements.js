import { Card } from '@material-ui/core';
import styled from 'styled-components';

export const PCard = styled(Card)`
    margin: 20px 20px;
    min-width: 150;

`;

export const PokemonName = styled.p`
    color: #000;
    font-size: 18px;
    text-align: left;
`;

export const PokemonType = styled.p`
    color: #000;
    font-size: 14px;
    text-align: left;
    overflowWrap: break-word;
`;

export const PokemonNumber = styled.p`
    color: #000;
    font-size: 14px;
    text-align: left;
    overflowWrap: break-word;
`;
