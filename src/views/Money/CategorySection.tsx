/*
 * @Author: H.
 * @Date: 2021-12-21 08:39:44
 * @LastEditTime: 2021-12-21 17:23:39
 * @Description:
 */
import React, { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  font-size: 24px;
  > ul {
    display: flex;
    background: #c4c4c4;
    > li {
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;
      &.selected::after {
        content: '';
        display: block;
        height: 3px;
        background: #333;
        position: absolute;
        bottom: 0;
        width: 100%;
        left: 0;
      }
    }
  }
`
type Props = {
  value: '-' | '+';
  onChange: (value: '-' | '+') => void
}
const CategorySection: React.FC<Props> = (props) => {
  const categoryMap = { '-': '支出', '+': '收入' }
  type keys = keyof typeof categoryMap
  const [categoryList] = useState<keys[]>(['-', '+'])
  const category = props.value

  return (
    <Wrapper>
      <ul>
        {categoryList.map((c) => (
          <li
            className={category === c ? 'selected' : ''}
            onClick={() => {
              props.onChange(c)
            }}
            key={c}
          >
            {categoryMap[c]}
          </li>
        ))}
      </ul>
    </Wrapper>
  )
}

export default CategorySection
