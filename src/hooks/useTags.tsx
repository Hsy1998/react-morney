/*
 * @Author: H.
 * @Date: 2021-12-22 18:26:01
 * @LastEditTime: 2021-12-22 19:02:41
 * @Description: 
 */

import { useState } from "react";

const useTags = () => {
  const [tags, setTags] = useState<{id: number, name: string}[]>([{id: 1,name:'衣'}, {id: 2,name:'食'}, {id: 3,name:'住'}, {id: 4,name:'行'}])
  return {
    tags,
    setTags
  }
}

export { useTags }

