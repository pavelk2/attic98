export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-2xl mx-auto px-6 py-20">
        <header className="mb-16">
          <h1 className="text-4xl font-bold mb-2">
            Attic 98 - House Conference
          </h1>
          <p className="text-slate-400 text-lg">Friends of Friends only.</p>
        </header>

        <section className="mb-16">
          <h2 className="text-sm font-semibold tracking-widest text-slate-500 uppercase mb-6">
            Concept
          </h2>
          <div className="space-y-5 text-slate-200 leading-relaxed">
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

        <section>
          <h2 className="text-sm font-semibold tracking-widest text-slate-500 uppercase mb-6">
            Format
          </h2>
          <p className="text-slate-200 leading-relaxed mb-6">
            This house conference will only fit 25 people. Think about one
            person you believe will be a great addition to this community.
            Invite them.
          </p>
          <ul className="space-y-3 text-slate-200 leading-relaxed">
            <li className="flex gap-3">
              <span className="text-slate-500">&bull;</span>
              <span>15 EUR for food and drinks</span>
            </li>
            <li className="flex gap-3">
              <span className="text-slate-500">&bull;</span>
              <span>
                Unless communicated, there is no limit on the topic of the
                talks
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-slate-500">&bull;</span>
              <span>
                Strict 5+3 min for the talk and questions (we will have one
                person doing time keeping)
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-slate-500">&bull;</span>
              <span>6pm sharp we start the first batch of speakers</span>
            </li>
            <li className="flex gap-3">
              <span className="text-slate-500">&bull;</span>
              <span>7pm sharp we start the second batch of speakers</span>
            </li>
            <li className="flex gap-3">
              <span className="text-slate-500">&bull;</span>
              <span>
                When speakers present we turn off the intercom, and late
                people can not come in (so don&rsquo;t be late, and if you
                are late - come in-between batches)
              </span>
            </li>
          </ul>
        </section>

        <section className="mt-16">
          <h2 className="text-sm font-semibold tracking-widest text-slate-500 uppercase mb-6">
            How to join?
          </h2>
          <p className="text-slate-200 leading-relaxed">
            The only way to join is to know someone who is already a part of
            the community, and be invited by them.
          </p>
        </section>
      </div>
    </div>
  );
}
