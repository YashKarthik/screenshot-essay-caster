import { Cast } from '../utils/interfaces';
import { likeIcon, recastIcon, commentIcon} from '../assets/icons';

export const CastCard: React.FC<{cast: Cast}> = ({cast}) => {
  return (
    <a href={cast.merkleRoot} className="card m-2 w-80 bg-neutral-focus card-compact border-2 border-base-300 shadow-base-300 hover:shadow-md hover:-translate-x-1 hover:-translate-y-1">

      <div className="flex flex-row p-2 pb-0 justify-between">

        <div className="flex flex-row">
          <img src={cast.meta.avatar} alt='User avatar' className="w-8 rounded-full mr-1" />
          <p className="card-title">{cast.body.username}</p>
        </div>

        <div className="flex flex-row items-center justify-evenly text-secondary">
          {likeIcon}
          {cast.meta.reactions.count}
        </div>

        <div className="flex flex-row items-center justify-evenly text-secondary">
          {recastIcon}
          {cast.meta.recasts.count}
        </div>

        <div className="flex flex-row items-center justify-evenly text-secondary">
          {commentIcon}
          {cast.meta.numReplyChildren}
        </div>

      </div>

      <div className="card-body">
        <p>{cast.body.data.text}</p>
      </div>

      <div className="overflow-auto max-h-52 border-b-2 rounded-b-2xl border-base-300">
        <img src={cast.body.data.image!} alt="Essay image" />
      </div>

    </a>
  );
}
