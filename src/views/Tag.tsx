/*
 * @Author: H.
 * @Date: 2021-12-22 18:53:35
 * @LastEditTime: 2021-12-22 18:55:38
 * @Description: 
 */
import { useTags } from 'hooks/useTags'
import React from 'react'
import { useParams } from 'react-router'

type Params = {
  id: string
}
const Tag: React.FC = () => {
  const {findTag} = useTags()
  const { id } = useParams<Params>()
  const tag = findTag(parseInt(id))
  return (
    <span>{tag.name}</span>
  )
}

export default Tag
