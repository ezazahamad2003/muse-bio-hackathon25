export default function CTA() {
  return (
    <section className="mx-auto my-4 max-w-screen-content px-6 pb-20">
      <div className="rounded-2xl bg-white p-8 shadow-soft md:p-12">
        <h3 className="text-2xl font-semibold md:text-3xl">Join the movement</h3>
        <p className="mt-3 max-w-2xl text-neutral-700">
          Partner with Muse Bio to explore community engagement, research, and futuristic
          applications of menstrual blood–derived stem cells.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a href="mailto:muse@mycells.bio" className="rounded-xl bg-black px-5 py-3 text-white hover:opacity-90">
            Contact: muse@mycells.bio
          </a>
          <a href="https://www.mycells.bio/" target="_blank" className="rounded-xl bg-white px-5 py-3 text-black ring-1 ring-neutral-200 hover:bg-neutral-50">
            Learn more at mycells.bio
          </a>
        </div>
        <p className="mt-6 text-sm text-neutral-500">
          This page is an artistic concept for the Muse Bio AI Art track. Not medical advice.
        </p>
      </div>
    </section>
  );
}
