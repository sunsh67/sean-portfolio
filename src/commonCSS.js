// import React from 'react';
import styled from 'styled-components';

export const Flex =  styled.div`
         display: flex;
         margin: auto;
         width: ${ props => props.width || '100%'};
         height: ${ props => props.height};
         flex-wrap : ${ props => props.wrap || 'default'}
         flex-direction: ${ props => props.direction};
         @media only screen and (min-width: 961px){
            height: ${ props => props.dtheight};
        }
         `;
    
export const LineSpace = styled.div`
         margin : 1%;
         @media only screen and (min-width: 961px){
             margin: 0.5%;
         }
          `;