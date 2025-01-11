import useFetch from "../../hooks/use-fetch"

function CommentsList(){
    const{data,loading,error} = useFetch('https://dummyjson.com/comments')
    console.log(data,loading,error)

    if(loading) return (<h1>the comments are loading</h1>)
    return(
        <div>
            <h1>Comment list page</h1>
            
        <ul>
            {
                data?.comments?.length>0?
                data?.comments.map((commentsItem)=>
                    <li key={commentsItem.id}>
                        <p>{commentsItem.body}</p>
                        <label>{commentsItem.likes} likes</label>
                        </li>
                )
                :null
            }
        </ul>
        </div>
    )
}
export default CommentsList