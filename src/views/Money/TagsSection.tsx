import styled from "styled-components";

const TagsSection = styled.section`
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
        margin: 8px 12px
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

export default TagsSection