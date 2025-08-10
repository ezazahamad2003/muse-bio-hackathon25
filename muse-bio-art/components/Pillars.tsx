import { FlaskConical, ShieldCheck, Home } from "lucide-react";

const items = [
  {
    icon: Home,
    title: "Accessible by design",
    text: "At-home collection kit for a gentle, non-invasive experience.",
  },
  {
    icon: ShieldCheck,
    title: "Consent-first",
    text: "Your biology, your choice. Nothing is stored without consent.",
  },
  {
    icon: FlaskConical,
    title: "Built for impact",
    text: "From research to real-world regenerative applications.",
  },
];

export default function Pillars() {
  return (
    <section className="mx-auto max-w-screen-content px-6 py-16">
      <div className="grid gap-6 md:grid-cols-3">
        {items.map(({ icon: Icon, title, text }) => (
          <div key={title} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-soft">
            <Icon className="h-6 w-6" />
            <h3 className="mt-4 text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-neutral-700">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
