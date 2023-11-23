import { useGetPostsQuery } from '../../app/api/apiSlice';
import PostCard from '../postCard/PostCard';
import './PostsList.scss';
import { Loader } from '../loader/Loader';
import { useEffect, useState } from 'react';

function PostsList() {
  const [page, setPage] = useState(0);
  // получение данных
  const {data: posts = [], isFetching, isLoading} = useGetPostsQuery(page);

  console.log(posts);

  useEffect(() => {
    const onScroll = (e) => {
      const scrolledToBottom =
        e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop +  window.innerHeight) < 100;
        console.log(scrolledToBottom);
      if (scrolledToBottom && !isFetching) {
        console.log("Fetching more data...");
        setPage(page + 1);
      }
    };
    document.addEventListener("scroll", onScroll);

    return function () {
      document.removeEventListener("scroll", onScroll);
    };
  }, [page, isFetching]);

  return (
    <main className='posts-list'>
      {isLoading ? <Loader/> : 
            posts?.map(post => {
              return (
                <PostCard key={post.id} {...post}/>
              )
            })}

    </main>
  )
}

export default PostsList