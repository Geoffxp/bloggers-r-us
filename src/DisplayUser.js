import ListPosts from "./ListPosts"
import { useMediaQuery } from 'react-responsive';

export default function DisplayUser({ user, id, url, posts, setPosts }){

    async function getPosts(){
        const response = await fetch(`${url}/${id}/posts`)
        setPosts(await response.json());
        console.log(posts)
        console.log(id)
    }

    const hidePosts = () => setPosts([])

    if(posts.length){
        return (
            <>
            <div className="card container text-center d-flex flex-row justify-content-between">
                <h3 className="card-title m-2">{user.name}</h3>
                {(!(id === posts[0].userId)) ? <button className="btn btn-info" onClick={getPosts}>Posts</button> :
                <button className="btn btn-secondary" onClick={hidePosts}>Hide</button>}
            </div>
            <div>
                {(id === posts[0].userId) && <ListPosts posts={posts} hidePosts={hidePosts} />}
            </div>
            </>
        )
    } else {
        return (
            <div className="card container text-center d-flex flex-row justify-content-between">
                <h3 className="card-title m-2">{user.name}</h3>
                <button className="btn btn-info" onClick={getPosts}>Posts</button>
            </div>
        )
    }
}