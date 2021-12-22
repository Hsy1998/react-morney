/*
 * @Author: H.
 * @Date: 2021-12-21 08:39:44
 * @LastEditTime: 2021-12-21 15:13:28
 * @Description:
 */
import Input from 'components/Input'
import React from 'react'
import { ChangeEventHandler } from 'react-router/node_modules/@types/react'
import styled from 'styled-components'

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 14px 16px;
  font-size: 14px;

`
type Props = {
  value: string;
  onChange: (value: string) => void
}
const NotesSection: React.FC<Props> = (props) => {
  const note = props.value
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
  props.onChange(e.target.value)
  }
  return (
    <Wrapper>
      <Input label="备注"  type="text"
          placeholder="在这里添加备注"
          value={note}
          onChange={onChange} />
    </Wrapper>
  )
}
export default NotesSection
