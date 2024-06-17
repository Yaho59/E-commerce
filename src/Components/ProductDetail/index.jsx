import { MdOutlineClose } from "react-icons/md";
import React, { useContext } from 'react'
import { shoppingCardContext } from "../../Context";

function ProductDetail() {

  const { isProductDetailOpen, closeProuctDetail,
    productDetailShow, } = useContext(shoppingCardContext);
  return (
    <aside className={`${isProductDetailOpen ? 'flex' : 'hidden'} w-[360px] h-h-calc  flex-col fixed right-0 top-[48px] border border-black rounded-lg bg-white z-10`}>
      <div className='flex justify-between items-center px-4 py-3'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <MdOutlineClose onClick={() => closeProuctDetail()} />
      </div>
      <div className="flex flex-col overflow-y-auto">
        <figure className="rounded-lg">
          <img className="rounded-lg" src={productDetailShow.image} alt={productDetailShow.title} />
        </figure>
        <p className="flex gap-2 px-4 py-2 text-sm font-medium">
          <span >{productDetailShow.title}</span>
          <span >${productDetailShow.price}</span>
        </p>
        <p className="p-4 text-sm font-normal text-gray-400">{productDetailShow.description}</p>
      </div>
    </aside>
  )
}

export { ProductDetail } 