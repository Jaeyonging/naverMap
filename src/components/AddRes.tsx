import React from 'react'
import { IoCloseSharp } from "react-icons/io5";

interface Props {
    setOpen: (value: boolean) => void
}
export const AddRes = ({ setOpen }: Props) => {
    return (
        <>
            <div className='fixed flex w-[80vw] h-[90vh] bg-[white] top-[5vh] left-[10vw] z-50 shadow-md shadow-black p-3 rounded-[10px]'>
                <IoCloseSharp className='absolute right-0 text-[30px] cursor-pointer' onClick={() => setOpen(false)} />
                <div>hi</div>
            </div>
        </>
    )
}
