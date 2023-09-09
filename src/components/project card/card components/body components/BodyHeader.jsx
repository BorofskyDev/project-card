function BodyHeader(props) {
  return (
    <>
      <h2 className='body__header'>Title</h2>
      <div className='body__stack'>
        <p className='body__stack--stack-item'>React</p>
        <p className='body__stack--stack-item'>SCSS</p>
        <p className='body__stack--stack-item'>Figma</p>
      </div>
      <a className='link body__live-link' href={props.liveLink}>
        Live Site
      </a>
      <a className='link body__github' href={props.repositoryLink}>
        See the Code
      </a>
      <p className='body__description'>Description</p>
    </>
  )
}
export default BodyHeader
