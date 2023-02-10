import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px;
  margin-top: 40px;
  height: 64px;

  .MuiPaginationItem-page {
    margin: 0 8px;
  }

  .MuiPaginationItem-page:hover {
    text-decoration: underline;
  }

  .MuiPaginationItem-page.Mui-selected,
  .MuiPaginationItem-page.Mui-selected:hover {
    color: #fff;
    text-decoration: none;
    background-color: #222;
    cursor: auto;
  }

  .desc {
    margin-top: 18px;
    color: #222;
  }
`