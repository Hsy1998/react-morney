/*
 * @Author: H.
 * @Date: 2021-12-21 08:39:44
 * @LastEditTime: 2021-12-21 17:10:30
 * @Description: 
 */
import Layout from '../components/Layout';
import React from 'react';
import TagsSection from './Money/TagsSection';
import NotesSection from './Money/NotesSection';
import CategorySection from './Money/CategorySection';
import NumberPadSection from './Money/NumberPadSection';
import styled from 'styled-components';

const MyLayout = styled(Layout)`
display: flex;
flex-direction: column;
`
function Money() {
  return (
    <MyLayout>
      <TagsSection>
        
      </TagsSection>
      <NotesSection>
        
      </NotesSection>
      <CategorySection>
        
      </CategorySection>
      <NumberPadSection>
        <div className="output">100</div>
        <div className="pad clearfix">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button className="ok">OK</button>
          <button className="zero">0</button>
          <button className="dot">.</button>
        </div>
      </NumberPadSection>
    </MyLayout>
  );
}

export default Money;
