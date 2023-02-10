import styled from 'styled-components'

export const RoomsWrapper = styled.div`
  position: relative;
  margin-top: 30px;
  padding: 0 16px;

  .title {
    padding-left: 8px;
    color: #222;
    font-size: 20px;
    font-weight: 600;
  }


  .list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  >.cover {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, .8);
  }
`