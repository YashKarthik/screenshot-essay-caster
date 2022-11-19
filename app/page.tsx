import { getAllEssays } from '../utils/FetchMethods';
import { CastCard } from '../components/CastCard';

export default async function Home() {
  const data = await getAllEssays();

  return (
    <div>
      <section className="grid gap-4 mx-4 gap-x-11 justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {data.casts.map((cast) => {
          if (cast.body.data.image) return <CastCard key='key' cast={cast} />
        })}
      </section>
    </div>
  );
}
