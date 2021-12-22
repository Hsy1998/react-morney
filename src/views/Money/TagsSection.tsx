/*
 * @Author: H.
 * @Date: 2021-12-21 08:39:44
 * @LastEditTime: 2021-12-22 18:27:59
 * @Description: 
 */
import { useTags } from "hooks/useTags";
import { createId } from "lib/createId";
import React from "react";
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
type Props = {
  value: number[]; // 选中的标签
  onChange: (selected: number[]) => void // 父组件更新标签
}
const TagsSection: React.FC<Props> = (props) => {
  const {tags, setTags} = useTags()
  const selectedTagIds = props.value
  const onAddTag = () => {
    const tagName = window.prompt('请输入新标签的名称')
    if (tagName !== null) {
      setTags([...tags, {id: createId(),name:tagName}])
    }
  }

  const onToggleTag = (tagId: number) => {
    const index = props.value.indexOf(tagId)
    if (index >= 0) {
      props.onChange(selectedTagIds.filter(t => t !== tagId))
    } else {
      props.onChange([...selectedTagIds, tagId])
    }
  }
  const getClass = (tagId: number) => props.value.indexOf(tagId) >= 0 ? 'selected' : ''
  return (
    <Wrapper>
      <ol>
        {
          tags.map(tag =>
            <li key={tag.id}
              onClick={() => { onToggleTag(tag.id) }}
              className={getClass(tag.id)}
            >{tag.name}</li>)}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  )
}

export default TagsSection