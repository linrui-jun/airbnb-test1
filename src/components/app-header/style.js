import styled from 'styled-components'

export const AppHeaderWrapper = styled.div`

  &.fixed {
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    right: 0;
  }

  .content {
    position: relative;
    z-index: 99;
    padding: 0 24px;
    border-bottom: 1px solid #eee;
    border-color: ${props => props.theme.isAlpha ? "rgba(255,255,255,0)": "rgba(238,238,238,1)"};
    background-color: ${props => props.theme.isAlpha ? "rgba(255,255,255,0)": "rgba(255,255,255,1)"};

    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 80px;
    }
  }

  .cover {
    position: fixed;
    z-index: 98;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.4);
  }
`

export const SearchAreaWrapper = styled.div`
  height: ${props => props.isSearch ? "100px": ""};
  transition: height 300ms ease;
`