import { getEssayThread } from '../../utils/FetchMethods';
import { likeIcon, recastIcon, commentIcon} from '../../assets/icons';

type Props = {
  params: {
    merkleRoot: string;
  };
  searchParams?: {
    search?: string;
  };
};

const CastView = async (props: Props) => {
  const merkleRoot = props.params.merkleRoot;
  const data = await getEssayThread(merkleRoot);
  const cast = data.casts[data.casts.length - 1]

  return(
    <div className="flex flex-row">

      <figure className="w-[1100px] m-5 text-center">
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

            <div className="px-2 flex flex-row items-center justify-evenly text-secondary">
              {(new Date(cast.body.publishedAt)).toLocaleString()}
            </div>

          </div>

        </div>

        <div className="overflow-auto max-h-[550px] border-neutral border-2 rounded-lg ">
          <img className="overflow-auto" src={data.casts[data.casts.length - 1].body.data.image!} alt="Essay screenshot" />
        </div>
        <figcaption className="italic text-neutral-content">{data.casts[data.casts.length - 1].body.data.text}</figcaption>
      </figure>

      <section className="flex flex-col my-5">
        <h3 className="text-2xl font-bold">Conversations:</h3>

        <div className="">
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
      </section>
    </div>
  );
}

export default CastView;
