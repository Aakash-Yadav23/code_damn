import React from 'react'
import { Input } from '../ui/input'

const SearchEditor = () => {
    return (
        <div>
            <div className="flex relative">
                <Input placeholder="Search file" />

                <div className="absolute top-2 right-4">
                    <span className='border p-1 rounded-md'>
                        Ctrl + K
                    </span>
                </div>
            </div>

            <div className=" ">

            </div>

        </div>
    )
};




export default SearchEditor