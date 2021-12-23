/*
 * @Author: H.
 * @Date: 2021-12-21 08:39:44
 * @LastEditTime: 2021-12-23 15:29:53
 * @Description: 
 */
import Layout from '../components/Layout';
import React from 'react';
import { useTags } from 'hooks/useTags';
import styled from 'styled-components';
import Icon from 'components/Icon';
import { Link } from 'react-router-dom';
import Button from 'components/Button';
import Center from 'components/Center';

const TagList = styled.ol`
  font-size: 16px;
  background: white;
  padding-bottom: 10px;
> li {
  border-bottom: 1px solid #d5d5d9;
  line-height: 20px;
  margin-left: 16px;
  > a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 16px 10px 0;
  }
}
`

function Tags() {
  const { tags,addTag } = useTags()
  return (
    <Layout>
      <TagList>
        {tags.map(tag =>
          <li key={tag.id}>
            <Link to={'/tags/' + tag.id}>
              <span className='oneLine'>{tag.name}</span>
              <Icon name='right'></Icon>
            </Link>
          </li>)}
      </TagList>
      <Center>
        <Button onClick={addTag}>新增标签</Button>
      </Center>
    </Layout>
  );
}

export default Tags;
