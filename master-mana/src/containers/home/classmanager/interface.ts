/*
 * @Author: Lala Jack
 * @Date: 2020-10-21 09:55:49
 * @LastEditors: Ji Lala
 * @LastEditTime: 2020-10-23 11:20:31
 * @motto: Still water run deep
 * @Description: Modify here please
 * @FilePath: \exam-manage\src\containers\home\classmanager\interface.ts
 */
export interface IProps {
  props: any,
}
export interface IState {
  list: any[],
  classList: any[],
  classRoom: any[],
  studentUser: string,
  classRoomname: any,
  className: any,
  columns: any[],
  id: number,
  visible: boolean,
  text: string,
  pagination:{},
  pageSize:number,
}
