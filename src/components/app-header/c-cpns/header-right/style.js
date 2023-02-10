import styled from 'styled-components'

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  color: ${props => props.theme.text.primaryColor};

  .btns, .profile .btn {
    display: flex;
    align-items: center;
  }

  .btns {
    margin-right: 8px;
    color: ${props => props.theme.isAlpha ? "#fff" : props.theme.text.primaryColor};

    .btn {
      padding: 12px;
      cursor: pointer;
      &:hover {
        background-color: ${props => props.theme.isAlpha ? "rgba(247,247,247,.1)" :"#f7f7f7"};
        border-radius: 22px;
      }
    }
  }

  .profile {
    position: relative;
    width: 77px;
    height: 42px;
    
    .btn {
      justify-content: space-between;
      padding: 5px 5px 5px 12px;
      border: 1px solid #ddd;
      border-radius: 21px;
      cursor: pointer;
      background-color: #fff;
      
      ${props => props.theme.mixin.boxShadow}
    }

    .panel {
      position: absolute;
      top: 55px;
      right: 0;
      width: 240px;
      border-radius: 15px;
      box-shadow: 0 0 4px rgba(0, 0, 0, .18);
      color: #656565;
      background-color: #fff;

      .top, .bottom {
        padding: 15px 0;

        .register {
          color: #000;
        }

        .item {
          height: 38px;
          line-height: 38px;
          padding: 0 15px;
          cursor: pointer;

          &:hover {
            background-color: #f7f7f7;
          }
        }
      }

      .bottom {
        border-top: 1px solid #ddd;
      }
    }
  }
`