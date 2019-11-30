import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    * {
        box-sizing:border-box;
        color: #534d4d;
    }
    html, body {
        width: 100%;
    }
    a {
        color: inherit;
        text-decoration: none !important;
    }
    button {
        border: none;
        margin: 0;
        padding: 0;
        width: auto;
        overflow: visible;
        background: transparent;
        color: inherit;
        text-align: inherit;
        outline: none !important;
        cursor: pointer;
        &::-moz-focus-inner {
            border: 0;
            padding: 0;
        }
    }
    input{ 
        &:focus {
            outline: none;
        } 
    }
`;

export default globalStyles;
