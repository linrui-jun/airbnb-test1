import React, { memo, useState } from 'react'
import { FilterWrapper } from './style'
import filterData from '@/assets/data/filter_data.json'
import classNames from 'classnames'

const EntireFilter = memo(() => {
  const [selectItems, setSelectItem] = useState([])

  function itemClickHandel(item) {
    const newItems = [...selectItems]

    if (selectItems.includes(item)) {
      const index = selectItems.indexOf(item)
      newItems.splice(index, 1)
    } else {
      newItems.push(item)
    }
    setSelectItem(newItems)
  }

  return (
    <FilterWrapper>
      <div className="filter">
        {
          filterData.map(item => {
            return (
              <div 
                className={classNames("item", { active: selectItems.includes(item) })} 
                key={item}
                onClick={e => itemClickHandel(item)}
              >
                {item}
              </div>
            )
          })
        }
      </div>
    </FilterWrapper>
  )
})

export default EntireFilter