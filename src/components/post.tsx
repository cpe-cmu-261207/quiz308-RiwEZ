import FBComment from "./comment";
import { CommentType } from "../data/comments";


const Post = ({commentList} : {commentList: CommentType[]}) => {

    return ( 
      <div className="mx-auto max-w-2xl bg-gray-800 rounded-md shadow p-4 space-y-2 divide-y">

        {/* ส่วนของเจ้าของ post */}
        <div className="space-y-2">

          {/* image and name */}
          <div className="flex space-x-2 items-center">
            <img alt="bonk" className="w-12 h-12 rounded-full" src="data:image/jpeg;base64,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"></img>
            <span className='font-semibold text-lg text-white'>Tanat Tangun 630610737</span>
          </div>

          {/* status message */}
          <p className='text-white'>Chill lol ( ͡❛ ‿‿ ͡❛)</p>

          {/* like section */}
          <div className='flex items-center'>
            <img className='w-4 h-4 mr-1' src='/like.svg'></img>
            <p className='text-gray-300'>9999 คน</p>
          </div>

        </div>

          {commentList?.map(item => 
            <FBComment
              username={item.username} 
              userImagePath={item.userImagePath} 
              commentText={item.commentText} 
              likeNum={item.likeNum}
              replies={item.replies} />)
          }

      </div>
    )
}

export default Post;