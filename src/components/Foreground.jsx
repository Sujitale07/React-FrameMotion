import React, { useRef } from 'react'

import Cards from './Cards';

const Foreground = () => {


    const data = [
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.  Lorem ipsum dolor sit amet consectetur",
            fileSize: ". 9mb",
            isOpen: true,
            tags: {
                tagsDesc: "Download Now",
                tagColor: "green",
                tagOpen: false                
            }            
        },        
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.  Lorem ipsum dolor sit amet consectetur",
            fileSize: ". 3mb",
            isOpen: false,
            tags: {
                tagsDesc: "Download Now",
                tagColor: "blue",  
                tagOpen: true,              
            }            
        },        
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.  Lorem ipsum dolor sit amet consectetur",
            fileSize: ". 6mb",
            isOpen: true,
            tags: {
                tagsDesc: "Download Now",
                tagColor: "green", 
                tagOpen: true,               
            }            
        },        
    ]

    let ref = useRef()

    return (
        <div ref={ref} className="fixed md:flex gap-0 top-0 left-0 h-screen  w-full">
            {
                data.map((item, index)=>(
                    <Cards placeholders={item} refernce={ref} />
                ))
            }
        </div>
    )
}

export default Foreground