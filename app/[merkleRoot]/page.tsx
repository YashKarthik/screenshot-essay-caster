import { getEssayThread } from '../../utils/FetchMethods';
import { Suspense } from 'react';

import { Comments } from '../../components/CastComments';
import { Cast } from '../../components/Cast';
import { CastCaption } from '../../components/CastCaption';
import { Cast as ICast } from '../../utils/interfaces';

type Props = {
  params: {
    merkleRoot: string;
  };
  searchParams?: {
    img?: string;
  };
};

const CastView = async (props: Props) => {
  const merkleRoot = props.params.merkleRoot;
  const imgUrl = props.searchParams?.img;

  const dataPromise = getEssayThread(merkleRoot);

  async function fetchImage() {
    const data = await dataPromise;
    const cast: ICast = data.casts[data.casts.length - 1];
    return cast.body.data.image as string;
  }

  return(
    <div className="flex flex-col md:flex-row">

      <figure className="w-[1100px] m-5 text-center">
        <Suspense fallback={<p>Loading...</p>}>
          {/* @ts-expect-error Server Component */}
          <Cast casts={dataPromise} />
        </Suspense>

        <div className="overflow-auto max-h-[550px] max-w-[350px] sm:max-w-[650px] border-neutral border-2 rounded-lg ">
          <Suspense fallback={<p>Loading...</p>}>
            <img className="overflow-auto" src={imgUrl || (await fetchImage())} alt="Essay screenshot" />
          </Suspense>
        </div>

        <Suspense fallback={<p>Loading...</p>}>
          {/* @ts-expect-error Server Component */}
          <CastCaption casts={dataPromise} />
        </Suspense>
      </figure>

      <section className="flex flex-col my-5">
        <h3 className="text-2xl font-bold">Conversations:</h3>

        <Suspense fallback={<p>Loading...</p>}>
          {/* @ts-expect-error Server Component */}
          <Comments casts={dataPromise} />
        </Suspense>
      </section>
    </div>
  );
}

export default CastView;
