import styled, { createGlobalStyle } from 'styled-components';
import BgImage from './images/background.jpg';

export const GlobalStyle = createGlobalStyle`
    htlml {
        height: 100%;
        width: 100%;
    }

    body {
        background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${BgImage});
        background-size: cover;

        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;

    }

    *{
        box-sizing: border-box;
        font-family: 'Catamaran', sans-serif;
    }
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    >p {
        color: #fff;

    }

    .score {
        color: #fff;
        font-size: 2rem;
        margin: 0;
    }

    h1 {
        font-family: Fascinate Inline, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        background-image: linear-gradient(180deg, #6deeff, #00e1ff);
        background-size: 100%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        filter: drop-shadow(2px 2px #0085a3);
        font-size: 70px;
        font-weight: 400px;
        text-align: center;
        margin: 20px;
    }

    .start, .next {
        cursor: pointer;
        background: linear-gradient(180deg, #ffc3f3, #ff72e0);
        border: none;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        height: 40px;
        margin: 20px 0;
        padding: 0 40px;
        border-radius: 10px;
        color: white;
    }

    .start{
        max-width: 200px;
    }
`