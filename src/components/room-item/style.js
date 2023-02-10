import styled from 'styled-components'

export const ItemWrapper = styled.div`
  flex-shrink: 0;
  box-sizing: border-box;
  width: ${props => props.itemWidth};
  padding: 8px;

  .inner {
    width: 100%;
    
    .cover {
      position: relative;
      box-sizing: border-box;
      padding: 66.66% 8px 0;
      border-radius: 3px;
      overflow: hidden;

      .ant-carousel {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }

      .item {
        height: 100%;

        img {
          width: 100%;
          height: 100%;
        }
      }

      > img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .swiper {
      position: relative;
      cursor: pointer;

      &:hover {
        .contorl {
          display: flex;
        }
      }

      .contorl {
        position: absolute;
        z-index: 1;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        display: none;
        justify-content: space-between;
        color: #fff;

        .btn {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 83px;
          height: 100%;
          background: linear-gradient(to left, transparent 0%, rgba(0, 0, 0, 0.25) 100%);

          &.right {
            background: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
          }
        }
      }

      .indiactor {
        position: absolute;
        z-index: 9;
        bottom: 10px;
        left: 0;
        right: 0;
        width: 30%;
        margin: 0 auto;

        .dot-item {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 14.29%;

          .dot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background-color: #fff;

            &.active {
              width: 8px;
              height: 8px;
            }
          }
        }
      }
      
      .cover {
        position: relative;
        box-sizing: border-box;
        padding: 66.66% 0 0;
        overflow: hidden;


        img {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          border-radius: 5px;
          object-fit: cover;
          cursor: pointer;
        }
      }
    }

    .desc {
      margin-top: 10px;
      color: ${props => props.verifyColor};
      font-size: 12px;
      cursor: pointer;
    }

    .name {
      height: 51px;
      margin: 6px 0;
      color: ${props => props.theme.text.primaryColor};
      font-size: 16px;
      font-weight: 500;

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }

    .price {
      font-size: 13px;
    }

    .score {
      display: flex;
      align-items: center;

      .MuiRating-icon {
        margin-right: -2px;
      }

      .count {
        margin: 0 3px;
        font-size: 12px;
      }

      .extra {
        font-size: 12px;
      }
    }
  }
`