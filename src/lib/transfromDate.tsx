import dayjs from "dayjs"

/*
 * @Author: H.
 * @Date: 2021-12-23 18:53:36
 * @LastEditTime: 2021-12-23 18:53:37
 * @Description: 
 */
const transfromDate = (string: string) => {
  const day = dayjs(string)
  const now = dayjs()
  // isSame 是同样的
  if (day.isSame(now, 'day')) {
    return '今天'
    // subtract 减去
  } else if (day.isSame(now.subtract(1, 'day'), 'day')) {
    return '昨天'
  } else if (day.isSame(now.subtract(2, 'day'), 'day')) {
    return '前天'
  } else if (day.isSame(now, 'year')) {
    return day.format('M月D日')
  } else {
    return day.format('YYYY年MM月DD日')
  }
}

export default transfromDate
