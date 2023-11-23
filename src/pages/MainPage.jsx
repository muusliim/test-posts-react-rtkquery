import Header from "../components/header/Header"
import PostsList from "../components/postsList/PostsList"
import '../App.scss';


function MainPage() {
  return (
    <> 
        <Header/>
        <div className="container">
        <PostsList/>
        </div>
    </>
  )
}

export default MainPage;