import styled from 'styled-components'

export const ViewWrapper = styled.div`
  position: relative;

  .control-btn {
    position: absolute;
    z-index: 9;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 1px solid #d8d8d8;
    box-shadow:  0px 1px 1px 1px rgb(0, 0, 0, .14);
    background-color: #fff;
    cursor: pointer;
  }

  .left {
    left: -10px;
  }

  .right {
    right: -10px;
  }

  .cover-left,
  .cover-right {
    position: absolute;
    z-index: 4;
    top: 50%;
    transform: translateY(-50%);
    width: 48px;
    height: 68px;
   
  }

  .cover-left {
    left: -10px;
    background: linear-gradient(
      90deg, 
      rgb(255, 255, 255) 0%, 
      rgb(255, 255, 255) 27%, 
      rgba(255, 255, 255, 0) 100%
    );
  }

  .cover-right {
    right: -10px;
    background: linear-gradient(
      270deg, rgb(255, 255, 255) 0%, 
      rgb(255, 255, 255) 27%, 
      rgba(255, 255, 255, 0) 100%
    );
  }

  .scroll {
    overflow: hidden;
    .scroll-content {
      display: flex;
      transition: transform 300ms ease;
    }
  }
`