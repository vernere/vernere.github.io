const Service = ({ icon, title, text }) => {
  return (
    <article className='service'>
      <span className='service-icon'>
        <i className={icon}></i>
      </span>
      <div className='service-info'>
        <h4 className='service-title'>{title}</h4>
        <a href={text}>
          <p className='service-text'>{text}</p>
        </a>
      </div>
    </article>
  )
}
export default Service