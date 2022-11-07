import { Cast } from '../utils/interfaces';

export const CastCard: React.FC<{cast: Cast}> = ({cast}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl card-bordered card-compact">
      <div className="flex flex-row p-5 pb-0">
        <img src={cast.meta.avatar} alt='User avatar' className="w-7 rounded-full mr-1" />
        <p className="card-title">{cast.body.username}</p>
      </div>
      <div className="card-body">
        <p>{cast.body.data.text}</p>
      </div>
      <figure className="overflow-auto max-h-60">
        <img src={cast.body.data.image!} alt="Essay image" className="overflow-auto" />
      </figure>
    </div>
  );
}
