import styled from 'styled-components'

export const ItemWrapper = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 20%;

  .inner {
    margin: 8px;

    .cover {
      position: relative;
      border-radius: 7px;
      overflow: hidden;

      img {
        width: 100%;
      }

      .bg-cover {
        position: absolute;
        z-index: 4;
        bottom: 0;
        left: 0;
        right: 0;
        height: 60%;
        background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0) 3%, rgb(0, 0, 0) 100%);
      }
    }

    .info {
      position: absolute;
      z-index: 9;
      left: 50%;
      transform: translateX(-50%);
      bottom: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #fff;

      .city {
        font-size: 18px;
        font-weight: 500;
      }

      .price {
        font-size: 14px;
      }
    }
  }
`