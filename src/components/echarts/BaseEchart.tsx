/* eslint-disable react-hooks/exhaustive-deps */
/*
 * @Author: H.
 * @Date: 2021-12-24 16:49:46
 * @LastEditTime: 2021-12-24 17:11:32
 * @Description: 
 */
import * as echarts from 'echarts'
import React,{useRef,useEffect} from 'react'
import { EChartsOption } from 'echarts'

type Props = {
  options: EChartsOption
}
const BaseEchart: React.FC<Props> = (props) => {
  const {options} = props
  console.log(options,885585);
  
  const containerRef = useRef(null)
  let echartInstance:any = null
  useEffect(()=>{
    echartInstance.current = echarts.init(containerRef.current!)
  },[])

  useEffect(()=>{
    echartInstance.current.setOption(options)
  },[echartInstance, options])

  return (
  <div ref={containerRef}></div>)
}

export default BaseEchart

