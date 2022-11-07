import { getEssayThread } from '../../utils/FetchMethods';
import { likeIcon, recastIcon, commentIcon} from '../../assets/icons';

export default async function CastView({params}: { params: { merkleRoot: string }, searchParams: {} }) {
  const merkleRoot = params.merkleRoot;
  const data = await getEssayThread(merkleRoot);
  const cast = data.casts[data.casts.length - 1]

  return(
    <div className="flex flex-row">

      <figure className="w-[800px] m-5 text-center">
        <div className="flex flex-row mb-2 justify-between">
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
          </div>

        </div>

        <img className="border-neutral border-2 rounded-md " src={data.casts[data.casts.length - 1].body.data.image!} alt="Essay screenshot" />
        <figcaption className="italic text-neutral-content">{data.casts[data.casts.length - 1].body.data.text}</figcaption>
      </figure>

      <section className="flex flex-column">
        replies will come here
      </section>
    </div>
  );
}
