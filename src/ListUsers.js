import DisplayUser from "./DisplayUser";

export default function ListUsers({ users, url, posts, setPosts }){
    return users.map((user, index) => <DisplayUser key={index} user={user} id={user.id} url={url} posts={posts} setPosts={setPosts}/>)
}