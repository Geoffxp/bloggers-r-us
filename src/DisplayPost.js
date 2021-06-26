export default function DisplayPost({ post }){
    return (
        <>
            <h5>{post.title}</h5>
            <p>{post.body}</p>
            <hr />
        </>
    )
}