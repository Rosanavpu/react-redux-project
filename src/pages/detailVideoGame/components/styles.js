import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';

export const Container = styled.div`
  align-items: ${props => props.alignItems} !important;
  border: ${props => (props.border ? 'solid 1px red' : '')};
  display: flex;
  flex-wrap: ${props => props.flexDirection ?? 'wrap'};
  height: ${props => props.height};
  justify-content: ${props => props.justifyContent} !important;
  margin-bottom: ${props => props.marginBottom};
  margin-left: ${props => props.marginLeft ?? 'auto'} !important;
  margin-right: ${props => props.marginRight ?? 'auto'} !important;
  margin-top: ${props => props.marginTop};
  width: ${props => props.width};
  min-height: ${props => props.height};
  padding: ${props => props.padding ?? 'auto'};
`;

export const StyledButton = styled(Button)`
  text-transform: none;
  .MuiButton-label {
    color: #141a29;
  }
`;

export const StyledCardMedia = styled(CardMedia)`
  padding: 20%;
  width: 500px;
  margin: auto;
`;
