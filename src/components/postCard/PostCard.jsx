import './PostCard.scss';


function PostCard({title, body, userId, id}) {

    const shortBody = body.length > 100 ? body.slice(0, 100) + '...' : body;

  return (
    <div className='card'>
        <div className="wrapper">
            <div className="post-number">
               Пост №{id} от пользователя <b>ID {userId}</b>
            </div>
            <div className="divider"></div>
            <div className="body">
                <h1 className="title">
                    {title}
                </h1>
                <div className="text">

                    {shortBody}
                </div>
            </div>
            <div className="button-wrapper">
                <button className="button">
                    Просмотр
                </button>
            </div>
        </div>
     </div>
  )
}

export default PostCard