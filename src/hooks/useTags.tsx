/*
 * @Author: H.
 * @Date: 2021-12-22 18:26:01
 * @LastEditTime: 2021-12-22 19:02:41
 * @Description: 
 */

import { createId } from "lib/createId";
import { useState } from "react";

const defaultTags = [
  { id: createId(), name: '衣' },
  { id: createId(), name: '食' },
  { id: createId(), name: '住' },
  { id: createId(), name: '行' }]
const useTags = () => {
  const [tags, setTags] = useState<{ id: number, name: string }[]>(defaultTags)
  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0]
  const findTagIndex = (id: number) => {
    let result = -1
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        result = i
        break
      }
    }
    return result
  }
  const updateTag = (id: number, obj: { name: string }) => {
    const index = findTagIndex(id)
    // 深拷贝
    const tagsClone = JSON.parse(JSON.stringify(tags))
    // 把 深拷贝 的第 index 删掉， 换成 {id: id, name: obj.name}
    tagsClone.splice(index, 1, { id: id, name: obj.name })
    setTags(tagsClone)
  }

  const deleteTag = (id: number) => {
    const index = findTagIndex(id)
    const tagsClone = JSON.parse(JSON.stringify(tags))
    tagsClone.splice(index, 1)
    setTags(tagsClone)
  }
  return {
    tags,
    setTags,
    findTag,
    updateTag,
    findTagIndex,
    deleteTag
  }
}

export { useTags }

