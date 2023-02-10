import styled from 'styled-components'

export const TabsWrapper = styled.div`
  margin-bottom: 8px;

  .item {
    flex-basis: 120px;
    flex-shrink: 0;
    padding: 10px 16px;
    margin: 8px 0;
    margin-right: 16px;
    border-radius: 5px;
    border: 1px solid #d8d8d8;
    font-size: 17px;
    text-align: center;
    white-space: nowrap;
    cursor: pointer;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, .18);
    transition: box-shadow 300ms ease;
    
    &:hover {
      box-shadow: 1px 3px 7px rgba(0, 0, 0, .18);
    }

    &.active {
      color: #fff;
      background-color: ${props => props.theme.color.secondaryColor};
    }
  }
`