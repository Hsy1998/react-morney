/*
 * @Author: H.
 * @Date: 2021-12-21 08:39:44
 * @LastEditTime: 2021-12-23 17:02:23
 * @Description: 
 */
import Layout from '../components/Layout';
import React, { useState } from 'react';
import CategorySection from './Money/CategorySection';
import styled from 'styled-components';
import useRecords from 'hooks/useRecords';
import { useTags } from 'hooks/useTags';
import day from 'dayjs'

const CategoryWrapper = styled.div`
background: white
`
const Item = styled.div`
display: flex;
justify-content: space-between;
background: white;
font-size: 18px;
line-height: 20px;
padding: 10px 16px;
> .note {
  margin-left: 16px;
  margin-right: auto;
  color: #999
}
`
function Statistics() {
  const [category, setCategroy] = useState<'-' | '+'>('-')
  const {records} = useRecords()
  const {getName} = useTags()
  return (
    <Layout>
      <CategoryWrapper>
      <CategorySection value={category}
        onChange={(value) => setCategroy(value)}>
      </CategorySection>
      </CategoryWrapper>
      <div>
{records.map( r => {
  return <Item>
    <div className='tags'>
    {r.tagIds.map(tagId => <span>{getName(tagId)}</span>)}
    </div>
    {r.note && <div className='note'>
      {r.note}
      </div>}
      <div className='amount'>
      ￥{r.amount}
      </div>
    {/* {day(r.createdAt).format('YYYY年MM月DD日')} */}
  </Item>
})}
      </div>
    </Layout>
  );
}


export default Statistics;
