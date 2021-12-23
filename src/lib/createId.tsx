/*
 * @Author: H.
 * @Date: 2021-12-23 08:44:47
 * @LastEditTime: 2021-12-23 15:20:45
 * @Description: 
 */
let id = parseInt(window.localStorage.getItem('idMax') || '0');
const createId = () => {
    id += 1;
    window.localStorage.setItem('idMax', id.toString())
    return id
}

export {createId}