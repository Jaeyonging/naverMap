import React, { useEffect, useRef, useState } from 'react'
import { NaverMap } from "../routes/NaverMap";
import { CardView } from '../components/CardView';
import { AddRes } from '../components/AddRes';

export const Home = () => {
  const [longtitude, setLongtitude] = useState(37.5532054)
  const [latitude, setLatitude] = useState(127.0107185)
  const [isaddClicked, setAddClicked] = useState(false)

  const onClicked = (longtitude: number, latitude: number) => {
    setLongtitude(longtitude)
    setLatitude(latitude)
  }

  const addClicked = () => {
    setAddClicked(true)
  }
  return (
    <>
      <NaverMap longtitude={longtitude} latitude={latitude} />
      {isaddClicked ? <AddRes setOpen={setAddClicked}></AddRes> : <></>}
      <div className='z-100 absolute top-0 right-0'>
        <div className='flex'>
          <div className='w-[30vw] bg-[white] flex flex-col p-2'>
            <div className='flex flex-row justify-between'>
              <div className='rounded-[10px] bg-[white] shadow-sm shadow-black w-full text-center p-[10px] text-[20px] font-bold cursor-pointer' onClick={addClicked}>
                +
              </div>
            </div>
            <div className='bg-[white] rounded-[20px] mt-[10px] p-[20px] flex flex-col overflow-y-scroll h-[80vh]'>
              <CardView onClick={onClicked} longtitude={37.5532054} latitude={127.0107185} imgurl='https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240206_98%2F1707183901779Kpahd_JPEG%2F1707183854354.jpg' resTitle='약수순대국'></CardView>
              <CardView onClick={onClicked} longtitude={37.5585432} latitude={126.9236515} imgurl='https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20170525_181%2F1495647573958Ipfk4_JPEG%2F186475426953795_0.jpeg' resTitle='교동집'></CardView>
              <CardView onClick={onClicked} longtitude={37.5104410} latitude={127.0207291} imgurl='https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20191124_76%2F15745864705473Cxu1_JPEG%2FnIQpD-9FI8SBA4jrS2kr_lRH.jpg' resTitle='성천막국수'></CardView>
              <CardView onClick={onClicked} longtitude={37.5030950} latitude={127.0277714} imgurl='https://search.pstatic.net/common/?autoRotate=true&quality=95&type=f160_160&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20150901_180%2F1441091197669JAQxU_JPEG%2F166761513955607_0.jpg' resTitle='브릭'></CardView>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
