import styled from "styled-components";


export const IndiactorWrapper = styled.div`
  overflow: hidden;

  .i-content {
    position: relative;
    display: flex;
    transition: transform 200ms ease;

    > * {
      flex-shrink: 0;
    }
  }

`