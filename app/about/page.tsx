export default function About() {
  return (
    <div>
      <main className="m-8">
        <h1 className="text-2xl">About & FAQ</h1>

        <ul className="list-desc list-inside">
          <li className="list-disc p-3">What is Screenshot Essay Caster?
            <p className="pl-4">It is a Farcaster client designed specifically for reading screenshot essays posted on Farcaster.</p>
          </li>

          <li className="list-disc p-3">What are screenhot essays?
            <p className="pl-4">Literally the name. They are somewhere an alt to twitter threads, and have become a pretty big part of FC culture.</p>
          </li>

          <li className="list-disc p-3">My screenshot essay does not appear.
            <p className="pl-4">Make sure you've mentioned the word "screenshotessay" in your cast. Also, the indexer updates every thirty mins, so your essay won't appear instantly.</p>
          </li>
        </ul>
      </main>
    </div>
  );
}
