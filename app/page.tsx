import { getAllEssays, getEssayThread } from '../utils/FetchMethods';
import { CastCard } from '../components/CastCard';

export default async function Home() {
  const data = await getAllEssays();

  return (
    <div>
      <section className="grid grid-cols-3">
        {data.casts.map((cast) => {
          if (cast.body.data.image) return <CastCard key='key' cast={cast} />
        })}
      </section>
    </div>
  );
}
