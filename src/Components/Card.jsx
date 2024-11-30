import React from 'react';

export default function Cards() {
 
    return (
        <div className='w-full h-screen bg-slate-300'>
            <div className='w-52 absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] rounded-lg overflow-hidden'>
                <div className='w-full '>
                    <img src="https://images.unsplash.com/photo-1633174524778-61a18ee54490?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <div className='w-full px-3 py-4 bg-zinc-400'>
                        <h2 className='font-semibold'>Amazon Basics</h2>
                        <p className='text-xs mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptatibus ut quasi!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}