function Gallery(props) {
    return (
      <div>
        <h1>{props.title}</h1>
        <p>{props.artist}</p>
        <p>{props.medium}</p>
        {props.primaryImage ? <img style={{ width: '600px',height: '600px' }} src={props.primaryImage} alt={props.title} /> : "No Image!"}

      </div>
    )
  }
  
  export default Gallery
  




