import Video from "./Video";

export default function Inclusive() {
  return (
    <section className="mx-auto grid max-w-screen-content items-center gap-10 px-6 py-16 md:grid-cols-2">
      <div>
        <h3 className="text-3xl font-semibold">Inclusive innovation</h3>
        <p className="mt-4 text-neutral-700">
          Our vision is to change the game in medicine by unlocking the abundant, high-quality
          stem cells found conveniently in menstrual blood — making access to regenerative
          medicine more equitable.
        </p>
        <ul className="mt-6 list-disc space-y-2 pl-5 text-neutral-700">
          <li>At-home collection → viability check → bank if viable.</li>
          <li>Ethical and consent-first participation.</li>
          <li>Support for research and future therapies.</li>
        </ul>
        <a href="mailto:muse@mycells.bio" className="mt-8 inline-block rounded-xl bg-black px-5 py-3 text-white hover:opacity-90">
          Get in touch
        </a>
      </div>
      <Video src="/images/v3.mp4" poster="/images/p3.png" className="h-[360px]" />
    </section>
  );
}
