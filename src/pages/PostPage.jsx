import { useParams, useNavigate } from "react-router-dom"
import { useGetPostByIdQuery } from "../app/api/apiSlice"
import '../components/postCard/PostCard.scss';
import '../App.scss';
import { Loader } from "../components/loader/Loader";


function PostPage() {
    const {id} = useParams();
    const {data: post = [], isFetching} = useGetPostByIdQuery(id.substring(2));
    const navigate = useNavigate();

    console.log(post);

  return (
    <div className="container">
        {isFetching ? <Loader/> : 
                    <div  className='card'>
                    <div className="wrapper wrapper-solo">
                        <div className="post-number">
                        Пост №{post[0]?.id} от пользователя <b>ID {post[0]?.userId}</b>
                        </div>
                        <div className="divider"></div>
                        <div className="body">
                            <h1 className="title">
                                {post[0]?.title}
                            </h1>
                            <div className="text">
                                {post[0]?.body}
                            </div>
                        </div>
                        <div className="button-wrapper">
                            <button 
                                className="button"
                                onClick={() => navigate('/')}
                                >
                                Назад
                            </button>
                        </div>
                    </div>
                </div>
        }
    </div>
  )
}

export default PostPage