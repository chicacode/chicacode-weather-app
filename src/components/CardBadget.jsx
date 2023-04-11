import React from 'react'

function CardBadget({data}) {
  return (
        <span
			className={`rounded-full text-xs text-center capitalize bg-primary-light whitespace-nowrap px-2 py-1`}>
			<span className={`text-light`}>{data}</span>
		</span>
  )
}

export default CardBadget
