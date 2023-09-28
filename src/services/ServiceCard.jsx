import React from 'react'

function ServiceCard(props) {
  return (
    <div className='services-card w-3/12 flex flex-col gap-5'>
      <div className='services-img'>
        <img src={props.img}></img>
      </div>
      <div className='services-title text-2xl font-serif font-semibold'>{props.title}</div>
      <div className='services-text text-lg h-36'>{props.text}</div>
      <div className='services-button'></div>
      <div className='services-btn-center text-center'>
      <button class="rounded bg-slate-950 px-14 py-2 font-medium text-white hover:bg-blue-700">
            {props.button}
      </button>
      </div>
    </div>
  )
}

export default ServiceCard
