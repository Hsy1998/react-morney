/*
 * @Author: H.
 * @Date: 2021-12-22 18:53:35
 * @LastEditTime: 2021-12-23 14:35:35
 * @Description: 
 */
import Button from 'components/Button'
import Center from 'components/Center'
import Icon from 'components/Icon'
import Input from 'components/Input'
import Layout from 'components/Layout'
import { useTags } from 'hooks/useTags'
import React from 'react'
import { useParams,useHistory } from 'react-router'
import styled from 'styled-components'

type Params = {
  id: string
}

const Topbar = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
line-height: 20px;
padding: 14px;
background: white
`

const Inputwrapper = styled.div`
background: white;
padding: 0 16px;
margin-top: 16px
`

const Tag: React.FC = () => {
  const { findTag, updateTag, deleteTag } = useTags()
  const { id } = useParams<Params>()
  const tag = findTag(parseInt(id))
  const tagConent = (tag: { id: number, name: string }) => {
  
    return (
      <>
        <Inputwrapper>
          <Input type="text" value={tag.name} label="标签"
            placeholder="请输入标签名"
            onChange={(e) => { updateTag(tag.id, { name: e.target.value }) }} />
        </Inputwrapper>
        <Center>
          <Button onClick={() => { deleteTag(tag.id) }}>删除标签</Button>
        </Center>
      </>
    )
  }
  const history = useHistory()
  const onClickBack = () => {
    history.goBack()
  }
     return (
    <Layout>
      <Topbar>
        <Icon name="left" onClick={onClickBack} />
        <span>编辑标签</span>
        <Icon />
      </Topbar>
      {tag ? tagConent(tag) : <div>tag 不存在</div>}
    </Layout>
  )
}

export default Tag
