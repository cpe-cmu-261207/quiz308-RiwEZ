import { CommentType } from "../data/comments"
import Reply from "./reply"

export const Like = (props: {likeNum: number}) => {

  if (props.likeNum > 0) {
    return (
      <div className='flex items-center'>
        <img className='w-4 h-4 mr-1' src='/like.svg'></img>
        <p className='text-gray-300'>{props.likeNum} คน</p>
      </div>
    )
  }
  else {
    return (<div></div>)
  }
}

const FBComment = (props :CommentType) => {

    return (
        <div className="">

          {/* normal comment */}
          <div className="flex p-2 items-start space-x-2">
            <img className="w-10 w-10 rounded-full" src={props.userImagePath}></img>
            <div className="bg-gray-500 rounded-lg p-2">
              <p className="font-semibold text-white">{props.username}</p>
              <p className='text-white'>{props.commentText}</p>
              {/* like section (จะไม่แสดงถ้าไม่มีใครไลค์เลย) */}
              <Like likeNum={props.likeNum} />
            </div>
          </div>

          {/* replies */}
          {/* ต่างกันตรงที่มี padding มากกว่าเท่านั้น (pl-14) */}
          {props.replies.map(rply => 
            <Reply 
              username={rply.username} 
              userImagePath={rply.userImagePath} 
              commentText={rply.commentText} 
              likeNum={rply.likeNum}
              replies={rply.replies} />)
          }

        </div>
    )
}

export default FBComment