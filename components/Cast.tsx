import { CastsResponse } from '../utils/interfaces';
import { likeIcon, recastIcon, commentIcon} from '../assets/icons';

export const Cast = async ({ casts }: {casts: Promise<CastsResponse>}) => {
  const data = await casts;
  const cast = data.casts[data.casts.length - 1];

  return (
    <div className="flex flex-row mb-2 justify-between max-w-[350px] sm:max-w-[650px]">
      <div className="flex flex-row">
        <img src={cast.meta.avatar!} alt="User avatar" className="w-8 h-8  rounded-full mr-1" />
        <p>{cast.body.username!}</p>
      </div>

      <div className="flex flex-row">
        <div className="px-2 flex flex-row items-center justify-evenly text-secondary">
          {likeIcon}
          {cast.meta.reactions.count}
        </div>

        <div className="px-2 flex flex-row items-center justify-evenly text-secondary">
          {recastIcon}
          {cast.meta.recasts.count}
        </div>

        <div className="px-2 flex flex-row items-center justify-evenly text-secondary">
          {commentIcon}
          {cast.meta.numReplyChildren}
        </div>

        <div className="px-2 flex flex-row items-center justify-evenly text-secondary">
          {(new Date(cast.body.publishedAt)).toLocaleString()}
        </div>

      </div>
    </div>
  );
};
