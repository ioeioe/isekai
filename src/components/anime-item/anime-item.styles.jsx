import styled,{keyframes} from "styled-components";
import {Link} from 'react-router-dom';
import {PlayButtonContainer,PlayButtonIcon} from '../play-button/play-button.styles';

export const ItemImageContainer = styled.div`
  width: 100%;
  height: 90%;
  display:flex;
  align-items:center;
  justify-content:center;
`

export const ItemImage = styled.img`
  width: 100%;
  height: 100%;
`;
const animation=keyframes`
  0%{width:0;height:0;}
  100%{width:50px;height:50px;}
`
const animation2 = keyframes`
  0%{font-size:0px;}
  100%{font-size:15px;}
`
export const ItemContainer = styled(Link)`
  margin-top: 15px;
  background-color: #2c0822;
  width: 170px;
  height: 250px;
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  &:hover ${ItemImage}{
     filter: brightness(70%);
  }
    &:hover ${PlayButtonContainer}
  {
    display:initial;
    animation-name: ${animation};
    animation-timing-function: ease-out;
    animation-duration: 0.2s;
   
  }
  &:hover ${PlayButtonIcon}
  {
       animation-name: ${animation2};
    animation-timing-function: ease-out;
    animation-duration: 0.2s;
  }
`;




export const ItemEpisode = styled.div`
  width: 40px;
  height: 20px;
  background-color: orange;
  border-radius: 30px;
  color: white;
  text-align: center;
`;

export const ItemTitle = styled.div`
  width: 90%;
  text-align: center;
  color: #facced;
`;

export const ItemInfo = styled.div`
  width: 170px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  z-index: 1;
`;

export const ItemScore = styled.div`
  width: 40px;
  height: 20px;
  background-color: orange;
  border-radius: 30px;
  color: white;
  text-align: center;
`;
