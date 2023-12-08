import React from 'react';
import { FaPage4 } from "react-icons/fa6";
import { MdFindInPage } from "react-icons/md";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { motion } from 'framer-motion';

const Cards = ({placeholders, refernce}) => {
  return (
    <motion.div whileDrag={{ scale: 1.2 }} drag
    dragConstraints={{
      top: -600,
      left: -600,
      right: 500,
      bottom: 600,
    }}  className="bg-slate-600 relative overflow-hidden h-[300px] w-[250px] rounded-3xl m-5">
            <div className='pl-5 pt-5 text-slate-200'>
                <MdFindInPage size={"20px"}></MdFindInPage>
            </div>
            <div className='p-5 text-slate-200 font-semibold h-[130px]'>
                <p className='text-sm'>{placeholders.desc}</p>
            </div>


            <div className="absolute w-full bottom-0">

                <div className=" px-5 pb-3  w-full">
                    <div className="flex  items-center flex-column justify-between">
                        <div className='text-slate-200'>
                            <h3>{placeholders.fileSize}</h3>
                        </div>                        
                        <div className='bg-slate-300 rounded-full p-2'>
                            {placeholders.isOpen ? <MdOutlineFileDownload /> : <IoIosRemoveCircleOutline /> }
                            
                        </div>
                    </div>
                </div>
                {
                    placeholders.tags.tagOpen ? <div className={`footer ${placeholders.tags.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} p-3  flex justify-center  w-full`}>
                    <h1 className='text-xl text-slate-200'>{placeholders.tags.tagsDesc}</h1>
                </div> : null
                }
                
            </div>
        </motion.div>
  )
}

export default Cards