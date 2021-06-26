import DisplayPost from "./DisplayPost";

export default function ListPosts({ posts, hidePosts }){
    return (
        <div className="card container w-50">
            {posts.map((post, index) => <DisplayPost key={index} post={post} hidePosts={hidePosts} />)}
        </div>
    )
}