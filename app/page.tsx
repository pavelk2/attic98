export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-2xl mx-auto px-6 py-24">
        <header className="mb-20 border-b-2 border-black pb-8">
          <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-[0.95] mb-4">
            Attic98
            <br />
            Home Conference
          </h1>
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            Friends of Friends only.
          </p>
        </header>

        <section className="mb-20">
          <h2 className="text-xs font-bold tracking-[0.3em] uppercase mb-6">
            Concept
          </h2>
          <div className="space-y-5 text-neutral-800 leading-relaxed">
            <p>
              While I was in Berlin, I attended a house conference called
              Prenztorium (Prenzlauer Berg + Lectorium). It is a community of
              friends of friends. Every month around 50 people come to one
              house (many more want to join, but the capacity is limited to
              the first 50 who buy 5 EUR tickets), they chat and mingle, then
              5 people do 5 min presentation about anything + 3 minutes for
              questions. Then there is a break, and after that 5 other people
              do their presentations. Later people hang out till the evening.
              Those presentations could be about anything, anything serious,
              or anything not serious, some presentations are polished, some
              are last minute ones. Some are about philosophy, some about
              using Cursor IDE, some are about suicide prevention lines, some
              are about doing photography in war zones, some are about tea
              culture. One person tried to answer the question &ldquo;How
              much is the fish&rdquo; by Scooter.
            </p>
            <p>
              I attended that conference multiple times, and presented almost
              every time. Those events were the highlight for me every time.
              As I am back to Amsterdam, I would like to bring that culture
              here. My apartment can not fit 50 people. So I decided to start
              small.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-xs font-bold tracking-[0.3em] uppercase mb-6">
            Format
          </h2>
          <p className="text-neutral-800 leading-relaxed mb-6">
            This house conference will only fit 25 people. Think about one
            person you believe will be a great addition to this community.
            Invite them.
          </p>
          <ul className="space-y-3 text-neutral-800 leading-relaxed">
            <li className="flex gap-3 items-start">
              <span className="mt-2.5 w-1.5 h-1.5 bg-black flex-shrink-0" />
              <span>15 EUR for food and drinks</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-2.5 w-1.5 h-1.5 bg-black flex-shrink-0" />
              <span>
                Unless communicated, there is no limit on the topic of the
                talks
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-2.5 w-1.5 h-1.5 bg-black flex-shrink-0" />
              <span>
                Strict 5+3 min for the talk and questions (we will have one
                person doing time keeping)
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-2.5 w-1.5 h-1.5 bg-black flex-shrink-0" />
              <span>6pm sharp we start the first batch of speakers</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-2.5 w-1.5 h-1.5 bg-black flex-shrink-0" />
              <span>7pm sharp we start the second batch of speakers</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-2.5 w-1.5 h-1.5 bg-black flex-shrink-0" />
              <span>
                When speakers present we turn off the intercom, and late
                people can not come in (so don&rsquo;t be late, and if you
                are late - come in-between batches)
              </span>
            </li>
          </ul>
        </section>

        <section className="border-t-2 border-black pt-10">
          <h2 className="text-xs font-bold tracking-[0.3em] uppercase mb-6">
            How to join?
          </h2>
          <p className="text-2xl font-serif italic leading-snug">
            The only way to join is to know someone who is already a part of
            the community, and be invited by them.
          </p>
        </section>
      </div>
    </div>
  );
}
