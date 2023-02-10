import styled from 'styled-components'

export const FilterWrapper = styled.div`
  .filter {
    position: fixed;
    z-index: 9;
    top: 80px;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    padding-left: 16px;
    height: 48px;
    border-bottom: 1px solid #f2f2f2;
    background-color: #fff;

    .item {
      margin: 0 4px 0 8px;
      padding: 4px 12px;
      border: 1px solid #f2f2f2;
      border-radius: 4px;
      cursor: pointer;

      &:hover {
        background-color: #f2f2f2;
      }

      &.active {
        color: #fff;
        background-color: ${props => props.theme.color.secondaryColor};
      }

      &.active:hover {
        background-color: #2d6a6f;
      }
    }
  }
`