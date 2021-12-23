import { useEffect, useState } from "react"
import { useUpdate } from "./useUpdate"

/*
 * @Author: H.
 * @Date: 2021-12-23 15:49:08
 * @LastEditTime: 2021-12-23 16:18:24
 * @Description: 
 */
type RecordItem = {
  tagIds: number[]
  note: string
  category: '+' | '-'
  amount: number
  createdAt: string // ISO 8601
}

type newRecordItem = Omit<RecordItem, 'createdAt'> // 不要RecordItem里的createdAt类型
const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([])
  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'))
  }, [])
  useUpdate(() => {
    window.localStorage.setItem('records', JSON.stringify(records))
  }, [records])
  const addRecord = (newRecord: newRecordItem) => {
    if(newRecord.amount <= 0) {
        alert('金额不能为0')
        return false
    }
    if(newRecord.tagIds.length === 0) {
      alert('请至少选择一个标签')
      return false
    }
    const record = {...newRecord, createdAt: (new Date().toISOString())}
    setRecords([...records, record])
    return true
  }
  return { records, addRecord }
}

export default useRecords
