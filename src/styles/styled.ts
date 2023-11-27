import { current } from "@reduxjs/toolkit";
import styled, {css} from "styled-components";

export const CartBox = styled.div<{ display: string }>`
    position: fixed;
    top: 50px;
    right: 20%;
    display: none;
    width: 400px;
    height: auto;
    margin: 10px 15px;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    z-index: 999;
    ${({display})=> css`
        display: ${display}
    `}
`

export const CartCloseBtn = styled.p`
    position: absolute;
    top: 0;
    right: 5px;
    border: none;
    border-radius: 5px;
    margin: 0;
    cursor: pointer;
    color: red;
`
export const CartBtn = styled.button`
    padding: 10px 10px ;
    box-shadow: inset 0px -3px 0 0 rgba(0, 0, 0, 0.12) ;
    border: none ;
    border-radius: 4px ;
    background-color:  #adbab5;
    text-shadow: 0.7px 0.7px 0 rgba(0, 0, 0, 0.21) ;
    font-size: 14px ;
    border-radius: 5px;
    font-family: 'Orbitron', sans-serif;
    font-weight: 700;
    cursor: pointer;
    transition: .3s all;
    &:hover{
        background-color:  #8e9995;
    }
    &:active{
        transform: translateY(2px);
        box-shadow: none;
  }
`







