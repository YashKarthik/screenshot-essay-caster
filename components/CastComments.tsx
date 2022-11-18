import { CastsResponse } from '../utils/interfaces';
import { likeIcon, recastIcon, commentIcon} from '../assets/icons';

export const Comments = async ({ casts }: {casts: Promise<CastsResponse>}) => {
  const data = await casts;
  const cast = data.casts[data.casts.length - 1];

  return (
    <div className="overflow-scroll max-h-[670px]">
      {data.casts.map(c => {
        if (c.body.data.replyParentMerkleRoot != cast.merkleRoot) return;
        return (
          <div key={c.uri} className="flex flex-col items-stretch m-4 p-2 bg-neutral-focus rounded-md">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row">
                <img src={c.meta.avatar} alt='User avatar' className="w-8 rounded-full mr-1" />
                <p className="card-title">{c.body.username}</p>
              </div>

              <div className="flex flex-row">
                <div className="px-2 flex flex-row items-center justify-evenly text-secondary">
                  {likeIcon}
                  {c.meta.reactions.count}
                </div>

                <div className="px-2 flex flex-row items-center justify-evenly text-secondary">
                  {recastIcon}
                  {c.meta.recasts.count}
                </div>

                <div className="px-2 flex flex-row items-center justify-evenly text-secondary">
                  {commentIcon}
                  {c.meta.numReplyChildren}
                </div>

              </div>
            </div>

            <p>{c.body.data.text}</p>
            <div className="px-2 flex flex-row justify-evenly text-secondary self-end font-thin">
              {(new Date(c.body.publishedAt)).toLocaleString()}
            </div>

          </div>
        );
      })}
    </div>
  );
};
