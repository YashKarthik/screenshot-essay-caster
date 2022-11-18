import { CastsResponse } from '../utils/interfaces';

export const CastCaption = async ({ casts }: {casts: Promise<CastsResponse>}) => {
  const data = await casts;

  return (
    <figcaption className="italic text-neutral-content max-w-[350px] sm:max-w-[650px]">{data.casts[data.casts.length - 1].body.data.text}</figcaption>
  );
};
