function ServiceCard(props) {
  return (
    <div className='services-card w-3/12 flex flex-col gap-5'>
      <div className='services-img'>
        <img src={props.img}></img>
      </div>
      <h3 className='services-title'>{props.title}</h3>
      <h4 className='services-text h-36'>{props.text}</h4>
      <div className='services-button'></div>
      <div className='services-btn-center text-center'>
      <button>
            {props.button}
      </button>
      </div>
    </div>
  )
}

export default ServiceCard
