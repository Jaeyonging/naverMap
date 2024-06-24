import React from 'react'
import { IoCloseSharp } from "react-icons/io5";

interface Props {
    setOpen: (value: boolean) => void
}

export const EditCard = ({ setOpen }: Props) => {
    return (
        <div className='fixed flex w-[70vw] h-[80vh] top-[10vh] bg-[white] left-[15vw] shadow-md shadow-black p-3 rounded-[10px]'>
            <IoCloseSharp className='absolute right-0 text-[30px] top-0 cursor-pointer' onClick={() => setOpen(false)} />

        </div>
    )
}
