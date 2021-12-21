/*
 * @Author: H.
 * @Date: 2021-12-21 08:39:44
 * @LastEditTime: 2021-12-21 15:13:28
 * @Description:
 */
import React, { useRef, useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
  > label {
    display: flex;
    align-items: center;
    > span {
      margin-right: 16px;
      white-space: nowrap;
    }
    > input {
      display: block;
      width: 100%;
      height: 72px;
      background: none;
      border: none;
    }
  }
`
const NotesSection: React.FC = () => {
  const [note, setNote] = useState('')
  const refInput = useRef<HTMLInputElement>(null)
  const onBlur = () => {
    if(refInput.current !== null) {
      setNote(refInput.current.value)
    }
  }
  return (
    <Wrapper>
      <label>
        <span>备注</span>
        <input
          type="text"
          ref={refInput}
          placeholder="在这里添加备注"
          defaultValue={note}
          onBlur={onBlur}
        />
      </label>
    </Wrapper>
  )
}
export default NotesSection
