import React from "react";
import ReactDOM from "react-dom/client";
import {
  ArrowUpRight,
  BadgeCheck,
  Bath,
  Building2,
  CheckCircle2,
  Clock3,
  Droplets,
  Flame,
  Gauge,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Star,
  Wrench,
  X,
} from "lucide-react";
import "./index.css";

const services = [
  {
    title: "Leak Repairs",
    text: "Clean fault finding, wall-safe access, and lasting repairs for hidden leaks.",
    icon: Droplets,
    image:
      "https://www.batinoo.com/wp-content/uploads/2023/01/Les-interventions-les-plus-courantes-dun-plombier-en-Martinique-1024x683.jpg",
    note: "Moisture tracing, pipe repair, and protected finishes",
  },
  {
    title: "Drain Cleaning",
    text: "Blocked drains cleared fast with camera inspection and professional equipment.",
    icon: Gauge,
    image:
      "https://commercialplumberalbuquerque.com/wp-content/uploads/2025/01/commercialplumberalbuquerque-Office-Building-Plumbing-Installation.jpg",
    note: "Kitchen, bathroom, and main-line blockages",
  },
  {
    title: "Bathroom Installation",
    text: "Sinks, showers, toilets, valves, and fixtures installed with tidy finishing.",
    icon: Bath,
    image:
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=900&q=86",
    note: "Fixture installs with clean water-safe connections",
  },
  {
    title: "Water Heaters",
    text: "Hot water repairs, replacements, maintenance, and pressure-safe connections.",
    icon: Flame,
    image:
      "https://callwaterheaterman.com/wp-content/uploads/bb-plugin/cache/Employee-repairing-a-hot-water-heater-landscape-affa58090cab2d17a5a0865449b493f0-5e1ec45f44ac4.jpg",
    note: "Hot water restoration, valves, and safety checks",
  },
  {
    title: "Pipe Replacement",
    text: "Corroded, noisy, or damaged pipes replaced with minimal disruption.",
    icon: Wrench,
    image: "/images/pipe-replacement.png",
    note: "Copper, PVC, supply lines, and local reroutes",
  },
  {
    title: "Commercial Plumbing",
    text: "Reliable maintenance and urgent support for offices, retail, and hospitality.",
    icon: Building2,
    image:
      "https://commercialplumberalbuquerque.com/wp-content/uploads/2025/01/commercialplumberalbuquerque-Industrial-Plumbing-Installation.jpg",
    note: "Planned maintenance for occupied properties",
  },
  {
    title: "Kitchen Plumbing",
    text: "Supply lines, shutoff valves, sink waste, and appliance connections fitted cleanly.",
    icon: Wrench,
    image:
      "https://commercialplumberalbuquerque.com/wp-content/uploads/2025/01/commercialplumberalbuquerque-restaurant-fixtures.jpg",
    note: "Sinks, dishwashers, and clean water lines",
  },
  {
    title: "Toilet & Tap Repairs",
    text: "Running toilets, loose taps, dripping fixtures, and small faults fixed without fuss.",
    icon: Bath,
    image:
      "https://commercialplumberalbuquerque.com/wp-content/uploads/2025/01/commercialplumberalbuquerque-Healthcare-Facility-Plumbing-Installation.jpg",
    note: "Fast fixes for everyday plumbing faults",
  },
];

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1800&q=90",
    alt: "Plumbing technician working around pipework and tools",
  }
];

const gallery = [
  {
    title: "Sink line repair",
    image:
      "https://www.batinoo.com/wp-content/uploads/2023/01/Les-interventions-les-plus-courantes-dun-plombier-en-Martinique-1024x683.jpg",
    tag: "Under-sink repair",
  },
  {
    title: "Fixture installation",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1100&q=86",
    tag: "Bath and shower",
  },
  {
    title: "Water heater service",
    image:
      "https://callwaterheaterman.com/wp-content/uploads/bb-plugin/cache/Employee-repairing-a-hot-water-heater-landscape-affa58090cab2d17a5a0865449b493f0-5e1ec45f44ac4.jpg",
    tag: "Hot water system",
  },
  {
    title: "Bathroom maintenance",
    image:
      "https://images.unsplash.com/photo-1604709177225-055f99402ea3?auto=format&fit=crop&w=1100&q=86",
    tag: "Clean finish",
  },
];

const reviews = [
  "They found the leak quickly, protected the floor, and left the bathroom cleaner than when they arrived.",
  "Clear quote, same-day repair, and no pressure. Exactly what you want in an emergency.",
  "FlowFix now handles our rental properties because they communicate well and show up prepared.",
];

const serviceLoop = [
  "Burst Pipe Response",
  "Leak Detection",
  "Drain Cleaning",
  "Emergency Callouts",
  "Water Heaters",
  "Bathroom Installs",
  "Commercial Plumbing",
];

const serviceProof = [
  ["32 min", "average emergency arrival"],
  ["4.9/5", "verified local rating"],
  ["12 mo", "repair workmanship cover"],
];

function App() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [activeHero, setActiveHero] = React.useState(0);
  const projectSectionRef = React.useRef<HTMLElement | null>(null);
  const projectStageRef = React.useRef<HTMLDivElement | null>(null);
  const projectTrackRef = React.useRef<HTMLDivElement | null>(null);
  const nav = ["Services", "Emergency", "Projects", "Reviews", "Contact"];

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.72);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return undefined;

    const timer = window.setInterval(() => {
      setActiveHero((current) => (current + 1) % heroImages.length);
    }, 4800);

    return () => window.clearInterval(timer);
  }, []);

  React.useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return undefined;

    const updateGallery = () => {
      const section = projectSectionRef.current;
      const stage = projectStageRef.current;
      const track = projectTrackRef.current;
      if (!section || !stage || !track || window.innerWidth < 1024) {
        if (track) track.style.transform = "translate3d(0, 0, 0)";
        return;
      }

      const maxShift = Math.max(0, track.scrollWidth - stage.clientWidth);
      const stickyTop = 84;
      const sectionTop = section.offsetTop;
      const maxScroll = Math.max(1, section.offsetHeight - stage.offsetHeight - stickyTop);
      const progress = Math.min(
        1,
        Math.max(0, (window.scrollY - sectionTop) / maxScroll)
      );
      track.style.transform = `translate3d(-${maxShift * progress}px, 0, 0)`;
    };

    updateGallery();
    window.addEventListener("scroll", updateGallery, { passive: true });
    window.addEventListener("resize", updateGallery);
    return () => {
      window.removeEventListener("scroll", updateGallery);
      window.removeEventListener("resize", updateGallery);
    };
  }, []);

  return (
    <div className="min-h-screen bg-ice text-navy">
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-navy/92 py-0 shadow-card backdrop-blur-xl"
            : "border-b border-white/10 bg-transparent py-2"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-navy shadow-glow transition">
              <Droplets className="h-5 w-5" />
            </span>
            <span>
              <span className="block font-display text-2xl font-bold uppercase tracking-normal text-white transition">
                FlowFix Plumbing
              </span>
              <span className="hidden text-[11px] font-extrabold uppercase tracking-[0.24em] text-cyan/80 transition sm:block">
                Licensed local team
              </span>
            </span>
          </a>
          <div className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-extrabold text-white/76 transition hover:text-white">
                {item}
              </a>
            ))}
          </div>
          <a href="tel:+12125550188" className="hidden min-h-11 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 text-sm font-extrabold text-white shadow-card backdrop-blur-md transition hover:-translate-y-0.5 lg:inline-flex">
            <Phone className="h-4 w-4" />
            Call Now
          </a>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition lg:hidden"
            onClick={() => setOpen((current) => !current)}
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
        {open ? (
        <div className="bg-ice px-5 pb-5 lg:hidden">
            {nav.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)} className="block rounded-full px-4 py-3 text-sm font-extrabold text-navy/72">
                {item}
              </a>
            ))}
        </div>
        ) : null}
      </header>

      <main>
        <section id="top" className="relative h-[100svh] min-h-[720px] overflow-hidden bg-navy px-5 pb-6 pt-28 text-white lg:px-8 lg:pt-32">
          {heroImages.map((image, index) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              className={`absolute inset-0 h-full w-full object-cover opacity-0 transition duration-[1400ms] ${
                index === activeHero ? "opacity-100 animate-heroDrift" : ""
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,19,35,0.84)_0%,rgba(5,19,35,0.56)_42%,rgba(5,19,35,0.16)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(5,19,35,0.82),transparent_42%)]" />
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-navy to-transparent" />
          <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center md:pb-32 lg:pb-36">
            <div className="max-w-4xl reveal is-visible">
              <p className="inline-flex rounded-full border border-cyan/35 bg-white/12 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.22em] text-cyan shadow-card backdrop-blur-md">
                24/7 emergency response
              </p>
              <h1 className="mt-6 max-w-5xl font-display text-[3.5rem] font-bold uppercase leading-[0.84] text-white sm:text-7xl lg:text-8xl xl:text-[6.25rem]">
                Fast, Clean Plumbing Repairs Without The Stress.
              </h1>
              <p className="mt-7 max-w-2xl border-l-2 border-cyan/70 pl-5 text-lg leading-8 text-white/84">
                Emergency repairs, installations, leak detection, and maintenance
                for homes and businesses, handled by a licensed team that treats
                your property with care.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="#contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-water px-7 text-sm font-extrabold text-navy shadow-glow transition hover:-translate-y-0.5">
                  Book A Plumber
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a href="#services" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/12 px-7 text-sm font-extrabold text-white backdrop-blur-md transition hover:-translate-y-0.5">
                  View Services
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="mt-8 grid gap-px overflow-hidden border border-white/12 bg-white/12 sm:grid-cols-3 md:absolute md:bottom-6 md:left-5 md:right-5 md:z-20 md:mx-auto md:max-w-7xl lg:left-8 lg:right-8">
              {[
                ["24/7 Emergency", Clock3],
                ["Licensed Team", ShieldCheck],
                ["Same-Day Service", BadgeCheck],
              ].map(([label, Icon]) => {
                const TrustIcon = Icon as typeof Clock3;
                return (
                  <div key={label as string} className="bg-navy/54 p-4 backdrop-blur-md">
                    <TrustIcon className="h-5 w-5 text-cyan" />
                    <p className="mt-2 text-xs font-extrabold uppercase tracking-[0.2em] text-white/72">{label as string}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="emergency" className="bg-water px-5 py-7 text-navy lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <h2 className="font-display text-4xl font-bold uppercase leading-none md:text-5xl">
              Burst pipe? Blocked drain? We respond fast.
            </h2>
            <a href="#contact" className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-navy px-6 text-sm font-extrabold text-white shadow-card transition hover:-translate-y-0.5">
              Request Emergency Help
            </a>
          </div>
        </section>

        <section className="overflow-hidden border-y border-navy/10 bg-white py-4">
          <div className="marquee-track flex w-max items-center gap-7 px-4">
            {[...serviceLoop, ...serviceLoop].map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="inline-flex items-center gap-7 whitespace-nowrap font-display text-3xl font-bold uppercase leading-none text-navy sm:text-4xl"
              >
                {item}
                <span className="text-water">*</span>
              </span>
            ))}
          </div>
        </section>

        <section id="services" className="bg-white px-5 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <SectionHeading eyebrow="Services" title="Precise, clean plumbing support." />
              <div className="grid gap-3 sm:grid-cols-3">
                {serviceProof.map(([value, label]) => (
                  <div key={label} className="border border-navy/10 bg-ice px-5 py-4 shadow-card">
                    <p className="font-display text-3xl font-bold leading-none text-water">{value}</p>
                    <p className="mt-2 text-xs font-extrabold uppercase tracking-[0.14em] text-steel">{label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <article key={service.title} className={`group overflow-hidden border border-navy/10 bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-deep ${index === 0 ? "xl:col-span-2" : ""}`}>
                    <div className={`relative overflow-hidden ${index === 0 ? "h-72" : "h-56"}`}>
                      <img src={service.image} alt={service.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/82 via-navy/18 to-transparent" />
                      <div className="absolute bottom-4 left-4 grid h-11 w-11 place-items-center rounded-full bg-water text-navy shadow-glow">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.16em] text-water">{service.note}</p>
                      <h3 className="font-display text-3xl font-bold uppercase leading-none">{service.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-steel">{service.text}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-navy px-5 py-20 text-white lg:px-8">
          <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(90deg,rgba(112,228,255,.08)_1px,transparent_1px),linear-gradient(180deg,rgba(112,228,255,.06)_1px,transparent_1px)] [background-size:88px_88px]" />
          <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div>
              <SectionHeading eyebrow="Problem to solution" title="We stop water problems from becoming property problems." light />
              <p className="mt-5 max-w-xl text-base leading-7 text-white/68">
                Clean diagnosis, protected surfaces, and a simple repair record
                after every visit.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                {["Moisture checks", "Pressure tested", "Tidy handover"].map((item) => (
                  <span key={item} className="rounded-full border border-white/14 bg-white/[0.06] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-white/72">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <article className="border border-white/12 bg-white/[0.06] p-7 shadow-deep backdrop-blur-md md:translate-y-8">
                <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-cyan">Before</p>
                <p className="mt-5 font-display text-3xl font-bold uppercase leading-tight text-white">
                  Hidden leaks, water damage, noisy pipes, slow drains, and unclear repair costs.
                </p>
              </article>
              <article className="overflow-hidden border border-white/12 bg-white text-navy shadow-deep">
                <img src="https://precisionmechanical.com/wp-content/uploads/2025/02/tenweb_media_slaoqait9.webp" alt="Commercial plumber securing clean pipe connections" className="h-56 w-full object-cover" />
                <div className="p-7">
                  <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-water">After</p>
                  <p className="mt-5 font-display text-3xl font-bold uppercase leading-tight">
                    Stable pressure, protected finishes, and a clear record of what changed.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="Process" title="Simple steps. Clear quote. Clean repair." />
            <div className="mt-10 grid gap-4 md:grid-cols-4">
              {["Call Us", "We Inspect", "Clear Quote", "Clean Repair"].map((step, index) => (
                <article key={step} className="border border-navy/10 bg-ice p-5 shadow-card transition hover:-translate-y-1">
                  <span className="font-display text-4xl font-bold text-water">0{index + 1}</span>
                  <h3 className="mt-6 font-display text-2xl font-bold uppercase leading-none">{step}</h3>
                  <p className="mt-3 text-sm leading-6 text-steel">Clear communication and tidy work.</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="projects"
          ref={projectSectionRef}
          className="bg-mist px-5 py-20 lg:h-[300vh] lg:px-0 lg:py-0"
        >
          <div ref={projectStageRef} className="mx-auto lg:sticky lg:top-[84px] lg:flex lg:h-[calc(100vh-84px)] lg:w-screen lg:max-w-none lg:flex-col lg:justify-center lg:overflow-hidden lg:py-10">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 md:flex-row md:items-end md:justify-between lg:px-8">
              <SectionHeading eyebrow="Projects" title="Clean repairs. Better finished spaces." />
              <p className="max-w-md text-sm font-semibold leading-6 text-steel">
                Recent plumbing work across kitchens, bathrooms, hot water systems,
                and commercial interiors.
              </p>
            </div>
            <div
              ref={projectTrackRef}
              className="project-gallery mt-8 flex w-max gap-4 overflow-x-auto px-5 pb-5 lg:gap-8 lg:px-8 lg:overflow-visible lg:pb-0"
            >
              {gallery.map((item, index) => (
                <article key={item.title} className="group relative h-[390px] min-w-[85vw] shrink-0 overflow-hidden rounded-2xl bg-navy shadow-card sm:min-w-[560px] lg:h-[55vh] lg:max-h-[500px] lg:min-w-[65vw]">
                  <img src={item.image} alt={item.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-r from-navy/82 via-navy/18 to-transparent" />
                  <div className="absolute bottom-6 left-5 right-5 max-w-xl lg:left-16">
                    <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-cyan">{item.tag}</p>
                    <h3 className="font-display text-4xl font-bold uppercase leading-none text-white lg:text-6xl">{item.title}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="px-5 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="Reviews" title="Trusted because the work is tidy, direct, and done properly." />
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {reviews.map((review, index) => (
                <figure key={review} className="bg-white p-7 shadow-card">
                  <div className="flex gap-1 text-water">
                    {Array.from({ length: 5 }).map((_, star) => (
                      <Star key={star} className="h-4 w-4 fill-water" />
                    ))}
                  </div>
                  <blockquote className="mt-6 text-lg font-semibold leading-8">"{review}"</blockquote>
                  <figcaption className="mt-8 flex items-center gap-3 border-t border-navy/10 pt-5 text-sm font-extrabold uppercase tracking-[0.16em] text-steel">
                    <CheckCircle2 className="h-5 w-5 text-water" />
                    Verified client 0{index + 1}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-harbor px-5 py-24 text-white lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-cyan">Book service</p>
              <h2 className="mt-4 font-display text-6xl font-bold uppercase leading-[0.9] lg:text-7xl">
                Need a plumber today?
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                Call the team for urgent repairs, planned installations, or a
                maintenance visit that keeps your property protected.
              </p>
            </div>
            <div className="bg-white p-7 text-navy shadow-deep">
              <p className="font-display text-4xl font-bold uppercase leading-none">FlowFix Plumbing</p>
              <div className="mt-6 space-y-4 text-sm font-bold text-steel">
                <p>+1 212 555 0188</p>
                <p>service@flowfixplumbing.com</p>
                <p>Brooklyn, Queens, Manhattan, and nearby service areas</p>
              </div>
              <a href="tel:+12125550188" className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-water px-6 text-sm font-extrabold text-navy">
                Book Service Now
                <Phone className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-navy px-5 py-14 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 border-b border-white/10 pb-10 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.9fr]">
          <div>
            <a href="#top" className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-water text-navy shadow-glow">
                <Droplets className="h-5 w-5" />
              </span>
              <span className="font-display text-3xl font-bold uppercase leading-none">FlowFix Plumbing</span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/62">
              Licensed residential and commercial plumbing for urgent leaks,
              clean installations, fixture upgrades, and planned maintenance.
            </p>
            <a href="tel:+12125550188" className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-water px-6 text-sm font-extrabold text-navy">
              Emergency Call
              <Phone className="h-4 w-4" />
            </a>
          </div>
          <FooterColumn title="Services" items={["Leak repairs", "Drain cleaning", "Bathroom installs", "Water heaters", "Pipe replacement"]} />
          <FooterColumn title="Service areas" items={["Brooklyn", "Queens", "Manhattan", "Long Island City", "Nearby boroughs"]} />
          <div>
            <p className="font-display text-2xl font-bold uppercase leading-none text-white">Opening hours</p>
            <div className="mt-5 space-y-3 text-sm font-semibold text-white/64">
              <p>Emergency: 24 hours daily</p>
              <p>Office: Mon-Fri, 7am-6pm</p>
              <p>Saturday: 8am-4pm</p>
            </div>
            <p className="mt-6 flex items-start gap-2 text-sm font-semibold leading-7 text-white/64">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-cyan" />
              Brooklyn, Queens, Manhattan, and nearby service areas
            </p>
          </div>
        </div>
        <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-4 text-sm text-white/52 md:flex-row md:items-center md:justify-between">
          <p>Copyright 2026 FlowFix Plumbing. Licensed, insured, and ready for urgent calls.</p>
          <p>service@flowfixplumbing.com / +1 212 555 0188</p>
        </div>
      </footer>

      <a href="tel:+12125550188" className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-water text-navy shadow-glow lg:hidden" aria-label="Call FlowFix Plumbing">
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  light = false,
}: {
  eyebrow: string;
  title: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <p className={`text-[11px] font-extrabold uppercase tracking-[0.22em] ${light ? "text-cyan" : "text-water"}`}>
        {eyebrow}
      </p>
      <h2 className={`mt-3 font-display text-4xl font-bold uppercase leading-[0.94] sm:text-5xl ${light ? "text-white" : "text-navy"}`}>
        {title}
      </h2>
    </div>
  );
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="font-display text-2xl font-bold uppercase leading-none text-white">{title}</p>
      <ul className="mt-5 space-y-3 text-sm font-semibold text-white/64">
        {items.map((item) => (
          <li key={item}>
            <a href="#contact" className="transition hover:text-white">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
