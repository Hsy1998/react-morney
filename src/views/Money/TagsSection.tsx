/*
 * @Author: H.
 * @Date: 2021-12-21 08:39:44
 * @LastEditTime: 2021-12-21 15:01:27
 * @Description: 
 */
import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  padding: 12px 16px;
  background: #FFFFFF;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
    > ol {
    margin: 0 -12px;
      > li {
        background: #D9D9D9;
        border-radius: 18px;
        display: inline-block;
        padding: 3px 18px;
        font-size: 14px;
        margin: 8px 12px;
        &.selected {
          background: #f60;
          color: #fff;
        }
          }
         
  }
  > button{
      background: none;
      border: none;
      border-bottom: 1px solid;
      padding: 2px 4px #333;
      color: #666;
      margin-top: 8px
  }
`
const TagsSection: React.FC = () => {
  const [tags, setTags] = useState<string[]>(['衣','食','住','行'])
  const [selectdTags, setSelectedTags] = useState<string[]>([])
  const onAddTag = () => {
    const tagName = window.prompt('请输入新标签的名称')
    if(tagName !== null){
      setTags([...tags,tagName])
    }
  }

  const onToggleTag = (tag: string) => {
    const index = selectdTags.indexOf(tag)
    if(index >= 0) {
      setSelectedTags(selectdTags.filter(t => t !== tag))
    }else {
      setSelectedTags([...selectdTags,tag])
    }  
  }
  const getClass = (tag:string) => selectdTags.indexOf(tag) >= 0 ? 'selected': ''
  return (
    <Wrapper>
      <ol>
         {
         tags.map(tag =>
          <li key={tag} 
          onClick={() => {onToggleTag(tag)}}
          className={getClass(tag)}
          >{tag}</li>)}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
      </Wrapper>
  )
}

export default TagsSection