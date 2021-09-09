import { CommentType } from "../data/comments";
import { Like } from "./comment";

const Reply = (props: CommentType) => {

    return (
        <div className="flex p-2 items-start space-x-2 pl-14">
            <img className="w-10 w-10 rounded-full" src={props.userImagePath}></img>
            <div className="bg-gray-500 rounded-lg p-2">
              <p className="font-semibold text-white">{props.username}</p>
              <p className='text-white'>{props.commentText}</p>

              <Like likeNum={props.likeNum} />

            </div>
        </div>
    )
}

export default Reply;