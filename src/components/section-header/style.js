import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  margin-bottom: 12px;
  color: ${props => props.theme.text.secondaryColor};
  cursor: pointer;

  .title {
   font-size: 22px;
   font-weight: 600;
  }

  .subtitle {
    margin-top: 12px;
    padding-bottom: 8px;
    font-size: 16px;
  }
`