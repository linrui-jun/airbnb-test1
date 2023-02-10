import styled from 'styled-components'

export const LeftWrapper = styled.div`
  flex: 1;

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 102px;
    height: 80px;
    color: ${props => props.theme.isAlpha ? "#fff": props.theme.color.primaryColor};
    cursor: pointer;
  }
`