/*
 * @Author: H.
 * @Date: 2021-12-21 08:39:44
 * @LastEditTime: 2021-12-23 16:41:14
 * @Description: 
 */
import Layout from '../components/Layout';
import React, { useState } from 'react';
import TagsSection from './Money/TagsSection';
import NotesSection from './Money/NotesSection';
import CategorySection from './Money/CategorySection';
import NumberPadSection from './Money/NumberPadSection';
import styled from 'styled-components';
import useRecords from 'hooks/useRecords';

const MyLayout = styled(Layout)`
display: flex;
flex-direction: column;
`
const CategoryWrapper = styled.div`
background: #c4c4c4
`
const defaultFormData = {
  tagIds: [] as number[],
  note: '',
  category: '-' as "-" | "+",
  amount: 0
}
function Money() {
  const [selected, setSelected] = useState(defaultFormData)

  // Partial --> 包含typeof selected部分类型
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({ ...selected, ...obj })
  }
const {addRecord} = useRecords()

  const submit = () => {
    if(addRecord(selected)) alert('保存成功')
    setSelected(defaultFormData)
  }
  return (
    <MyLayout scrollTop={9999}>
      <TagsSection value={selected.tagIds}
        onChange={(tagIds) => onChange({ tagIds })}>
      </TagsSection>
      <NotesSection value={selected.note}
        onChange={(note) => onChange({ note })}>
      </NotesSection>
      <CategoryWrapper>
      <CategorySection value={selected.category}
        onChange={(category) => onChange({ category })}>
      </CategorySection>
      </CategoryWrapper>
      <NumberPadSection value={selected.amount}
        onOk={submit}
        onChange={(amount) => onChange({ amount })}>
      </NumberPadSection>
    </MyLayout>
  );
}

export default Money;
