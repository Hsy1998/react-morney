/*
 * @Author: H.
 * @Date: 2021-12-21 08:39:44
 * @LastEditTime: 2021-12-24 17:12:37
 * @Description: 
 */
import Layout from '../components/Layout';
import React, { ReactNode, useState } from 'react';
import CategorySection from './Money/CategorySection';
import styled from 'styled-components';
import useRecords, { RecordItem } from 'hooks/useRecords';
import { useTags } from 'hooks/useTags';
import day from 'dayjs'
// import BaseEcharts from 'components/echarts/BaseEchart';
import transfromDate from 'lib/transfromDate';
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
const Header = styled.h3`
font-size: 18px;
line-height: 20px;
padding: 10px 16px;
`


function Statistics() {
  const [category, setCategroy] = useState<'-' | '+'>('-')
  const { records } = useRecords()
  const { getName } = useTags()
  const hash: { [k: string]: RecordItem[] } = {}
  const selectedRecords = records.filter(r => r.category === category)
  selectedRecords.forEach(r => {
    const key = day(r.createdAt).format('YYYY-MM-DD')
    if (!(key in hash)) {
      hash[key] = []
    }
    hash[key].push(r)
  })
  const array = Object.entries(hash).sort((a,b) => {
    if(a[0] === b[0]) return 0
    if(a[0] > b[0]) return -1
    if(a[0] < b[0]) return 1
    return 0
  })
  return (
    <Layout>
      <CategoryWrapper>
        <CategorySection value={category}
          onChange={(value) => setCategroy(value)}>
        </CategorySection>
      </CategoryWrapper>
      <div>
        {array.map(([date,records]) => <div key={date}>
          <Header >{transfromDate(date)}</Header>
          {records.map(r => {
          return <Item key={r.createdAt}>
            <div className='tags'>
              {r.tagIds
              .map(tagId => <span key={tagId}>{getName(tagId)}</span>)
              .reduce((result,span,index,array) => 
                result.concat(index < array.length - 1 ? [span, '，'] : [span])
              , [] as ReactNode[])}
            </div>
            {r.note && <div className='note oneLine'>
              {r.note}
            </div>}
            <div className='amount'>
              ￥{r.amount}
            </div>
          </Item>
        })}
          </div>)}
      </div>
    </Layout>
  );
}


export default Statistics;
