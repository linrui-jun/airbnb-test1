import React, { memo } from 'react'
import Pagination from '@mui/material/Pagination';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { PaginationWrapper } from './style'
import { fetchEntireRoomListAction } from '@/stores/modules/entire';

const EntireRooms = memo(() => {
  const { currentPage, totalCount } = useSelector((state) => ({
    currentPage: state.entire.currentPage,
    totalCount: state.entire.totalCount
  }), shallowEqual)

  const dispatch = useDispatch()
  // 事件处理函数
  function pageChangeHandel(event, pageCount) {
    // 回到顶部
    window.scrollTo(0, 0)

    // 重新发送网络请求
    dispatch(fetchEntireRoomListAction(pageCount - 1))
  }

  return (
    <PaginationWrapper>
      <Pagination count={Math.ceil(totalCount / 20)} onChange={pageChangeHandel}/>
      <div className="desc">
        第{currentPage * 20 + 1} - {currentPage * 20 + 20}个房源, 共超过{totalCount}个
      </div>
    </PaginationWrapper>
  )
})

export default EntireRooms