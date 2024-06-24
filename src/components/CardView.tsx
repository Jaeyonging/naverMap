import React, { useState } from 'react'
import { EditCard } from '../components/EditCard'
interface Props {
  resTitle: string,
  comment?: string
  star?: number,
  visitNumber?: number,

  imgurl: string
  onClick: Function
  longtitude: number
  latitude: number
}

export const CardView = ({ onClick, longtitude, latitude, resTitle, imgurl, comment = "", star = 0, visitNumber = 0 }: Props) => {
  const [isEdit, setEdit] = useState(false)
  const editOnClick = () => {
    setEdit(true)
  }

  return (
    <>
      <div className='bg-[white] h-[20vh] flex felx-row p-3 mb-[20px] shadow-lg shadow-black rounded-[10px]'>
        <img className='w-[150px] h-[100px] self-center cursor-pointer' src={imgurl} onClick={() => onClick(longtitude, latitude)}></img>
        <div className='flex flex-col justify-between pl-[10px] cursor-pointer' onClick={() => onClick(longtitude, latitude)}>
          <div>
            가게 이름: {resTitle}
          </div>
          <div>
            평가: {comment}
          </div>
          <div>
            stars: {star}/5
          </div>
          <div>
            방문횟수: {visitNumber}
          </div>
        </div>
        <button className='bg-[white] shadow-sm shadow-gray rounded-[20px] w-[80px] h-[30px]' onClick={editOnClick}>
          수정하기
        </button>
      </div>
      {isEdit && <EditCard setOpen={setEdit} />}
    </>


  )
}
