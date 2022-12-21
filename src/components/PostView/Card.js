import "./Card.css";
const Card = ({post})=> {
    return (
        <>
            <section className="card">
                <section className="card-header">
                    <div>
                        <div className="card-header__name">{post.name}</div>
                        <div className="card-header__place">{post.location}</div>
                    </div>
                    <span>
                    <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                    </span>
                </section>
                <section className="card-image">
                    <img src={require(`../../images/${post.PostImage}`)} alt="place"/>
                </section>
                <div className='desc-section'>
        <div className='upper-desc'>
          <div className='heart-rocket-likes'>
            <img src={require('../../images/heart.png')} alt='heart' />
            <span>
              <img src={require('../../images/send.png')} alt='send' />
            </span>
            <div className='likes'>100 likes</div>
          </div>
          <div className='date'>19-12-2022</div>
        </div>
        <div className='description'>{post.description}</div>
      </div>
               
            </section>
        </>
    )
}
export default Card; 