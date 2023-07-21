import styled, { css } from 'styled-components'

const FontThine = styled.p`

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 200;
    font-size: 40px;
    line-height: 47px;
    color: #010101;
    margin: 0;

    ${props => props.$36 && css`
        font-size: 36px;
    `}

    ${props => props.$32 && css`
        font-size: 32px;
    `}

    ${props => props.$28 && css`
        font-size: 28px;
    `}

    ${props => props.$26 && css`
        font-size: 26px;
    `}

    ${props => props.$24 && css`
        font-size: 24px;
    `}

    ${props => props.$2430 && css`
        font-size: 24px;
        line-height : 30px;
    `}

    ${props => props.$20 && css`
        font-size: 20px;
    `}

    ${props => props.$2025 && css`
        font-size: 20px;
        line-height : 25px;
    `}

    ${props => props.$1635 && css`
        font-size: 16px;
        line-height : 35px;
    `}

    ${props => props.$1618 && css`
        font-size: 16px;
        line-height : 20px;
    `}

    ${props => props.$168 && css`
        font-size: 16px;
        line-height : 24px;
    `}


    ${props => props.$1625 && css`
        font-size: 16px;
        line-height : 25px;
    `}

    ${props => props.$16light && css`
        font-size: 16px;
        line-height: 0;
    `}

    ${props => props.$1424 && css`
        font-size: 14px;
        line-height : 24px;
    `}

    ${props => props.$12 && css`
        font-size: 12px;
        line-height : 1;
    `}
`

export default FontThine
