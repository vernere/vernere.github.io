const Service = ({ icon, title, text }) => {
  return (
    <article className='service'>
      <span className='service-icon'>
        <i className={icon}></i>
      </span>
      <div className='service-info'>
        <a href={text}>
        <h4 className='service-title'>{title}</h4>
        </a>
      </div>
    </article>
  )
}
export default Service