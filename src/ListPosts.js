import DisplayPost from "./DisplayPost";

export default function ListPosts({ posts, hidePosts }){
    return (
        <div className="card container">
            {posts.map((post, index) => <DisplayPost key={index} post={post} hidePosts={hidePosts} />)}
        </div>
    )
}