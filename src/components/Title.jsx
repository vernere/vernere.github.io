const Title = ({ title, subTitle }) => {
  return (
    <div className='section-title'>
      <h2>
      <span>{title} {subTitle}</span>
      </h2>
    </div>
  );
};
export default Title;