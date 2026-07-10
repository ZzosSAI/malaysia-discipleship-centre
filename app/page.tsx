import Image from "next/image";
import {
  Menu,
  Wheat
} from "lucide-react";
import {
  church,
  disciplingMaterials,
  faithStatements,
  ministries,
  missionStrategy,
  navItems,
  serviceTimes
} from "@/content/site";

function SectionHeader({
  title,
  intro,
  align = "left",
  inverse = false
}: {
  title: string;
  intro?: string;
  align?: "left" | "center";
  inverse?: boolean;
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <h2
        className={`font-heading text-4xl font-bold leading-[1.05] sm:text-5xl ${
          inverse ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {intro ? (
        <p className={`mt-5 text-base leading-8 sm:text-lg ${inverse ? "text-white/74" : "text-navy/72"}`}>
          {intro}
        </p>
      ) : null}
    </div>
  );
}

function IconShell({
  children,
  tone = "light"
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={
        tone === "dark"
          ? "flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold text-navy shadow-gold"
          : "flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/12 text-earth ring-1 ring-gold/20"
      }
    >
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-cream text-navy">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-navy/10 bg-white text-navy shadow-[0_10px_40px_rgba(11,42,68,0.12)]">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#home" className="flex items-center gap-3" aria-label="Malaysia Discipleship Centre home">
            <Image
              src="/mdc-logo-new.jpeg"
              alt="Malaysia Discipleship Centre logo"
              width={1024}
              height={879}
              className="h-14 w-14 object-contain sm:h-16 sm:w-16"
              priority
            />
            <span className="max-w-[12rem] font-heading text-lg font-bold leading-tight sm:max-w-none sm:text-2xl">
              Malaysia Discipleship Centre
            </span>
          </a>

          <div className="hidden items-center gap-8 xl:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-navy/76 transition hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#about"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-white ring-1 ring-navy/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold xl:hidden"
            aria-label="Skip to about"
          >
            <Menu aria-hidden="true" className="h-5 w-5" />
          </a>
        </nav>
      </header>

      <section id="home" className="relative flex min-h-[92vh] items-center overflow-hidden bg-navy pt-24 text-white">
        <div className="absolute inset-0">
          <Image
            src="/mdc-harvest-field.png"
            alt="Golden harvest field in warm sunlight"
            fill
            priority
            className="animate-slow-drift object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/78 to-navy/18" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-cream to-transparent" />
        </div>

        <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="max-w-3xl animate-fade-up">
            <h1 className="font-heading text-6xl font-bold leading-[0.95] sm:text-7xl lg:text-8xl">
              Go Make Disciples of All Nations
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/88 sm:text-xl">
              MDC is a Christ-centred, Word-centred church committed
              to making disciples and disciple makers in obedience to the Great Commission.
            </p>
            <p className="mt-5 font-heading text-2xl font-bold text-gold">Matthew 28:19-20</p>
          </div>

          <div className="ml-auto hidden max-w-sm rounded-[2rem] border border-white/22 bg-white/12 p-6 text-white shadow-soft backdrop-blur-md lg:block">
            <div className="flex items-center gap-4">
              <IconShell tone="dark">
                <Wheat aria-hidden="true" className="h-6 w-6 animate-wheat-sway" />
              </IconShell>
              <p className="font-heading text-2xl font-bold leading-tight">
                The fields are ripe for harvest.
              </p>
            </div>
            <p className="mt-5 text-sm leading-7 text-white/78">
              A family church worshipping God and on mission with Him in Malaysia and beyond.
            </p>
          </div>
        </div>
      </section>

      <section id="join" className="relative bg-cream px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <SectionHeader
              title="Join Us"
              intro="You are welcome to gather with us for worship, fellowship, and Word-centred discipleship."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {serviceTimes.map((service) => {
                const Icon = service.icon;
                return (
                  <article
                    key={service.title}
                    className="rounded-lg bg-white p-6 shadow-soft ring-1 ring-navy/8"
                  >
                    <IconShell>
                      <Icon aria-hidden="true" className="h-6 w-6" />
                    </IconShell>
                    <h3 className="mt-5 font-heading text-2xl font-bold text-navy">
                      {service.title}
                    </h3>
                    <p className="mt-3 font-semibold text-earth">{service.time}</p>
                    <p className="mt-2 text-sm leading-6 text-navy/65">{service.detail}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative min-h-[360px] overflow-hidden rounded-lg bg-sky shadow-soft">
            <Image
              src="/mdc-harvest-field.png"
              alt="Harvest field and sky reflecting MDC's mission focus"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />
            <div className="absolute bottom-0 p-7 text-white">
              <p className="font-heading text-3xl font-bold leading-tight">
                Worship God. Be on mission with Him.
              </p>
            </div>
          </div>
          <div>
            <SectionHeader title="About MDC" intro={church.description} />
            <div className="mt-8 space-y-5 text-base leading-8 text-navy/72">
              <p>{church.purpose}</p>
              <p>{church.identity}</p>
              <p>{church.registration}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="beliefs" className="bg-sky px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            title="Statement of Beliefs"
            intro="Our confession is rooted in Scripture, centred on Christ, and shaped by the hope of His return."
            align="center"
          />
          <ol className="mt-12 grid gap-4 lg:grid-cols-2">
            {faithStatements.map((statement, index) => (
              <li
                key={statement}
                className="flex gap-5 rounded-lg bg-white/84 p-5 shadow-soft ring-1 ring-navy/6"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy font-heading text-lg font-bold text-white">
                  {index + 1}
                </span>
                <p className="text-sm leading-7 text-navy/76">
                  <strong className="font-bold text-navy">WE BELIEVE</strong>{" "}
                  {statement.replace(/^WE BELIEVE\s*/, "")}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="mission-strategy" className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <SectionHeader
              title="Mission and Strategy"
              intro="MDC's mission and strategy are summarised by the logo. The church as a community worships God and serves through evangelism, teaching, training, and transmitting the discipling vision."
            />
            <div className="mt-8 overflow-hidden rounded-lg bg-cream p-8 shadow-soft ring-1 ring-navy/8">
              <Image
                src="/mdc-logo-new.jpeg"
                alt="MDC logo showing the call to make disciples of all nations"
                width={1024}
                height={879}
                className="mx-auto h-64 w-full object-contain sm:h-80"
              />
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {missionStrategy.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-lg border border-navy/8 bg-cream/70 p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-soft"
                >
                  <IconShell>
                    <Icon aria-hidden="true" className="h-6 w-6" />
                  </IconShell>
                  <h3 className="mt-5 font-heading text-3xl font-bold text-navy">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-navy/70">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="discipling" className="relative overflow-hidden bg-navy px-5 py-20 text-white sm:px-8">
        <div className="absolute right-[-8rem] top-[-10rem] h-80 w-80 rounded-full border border-gold/18" />
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <SectionHeader
            title="Discipling Ministry and Missions"
            intro="Founded and obedient to the Great Commission, the church intentionally builds disciples to be transformed by God and become multiplying disciples."
            inverse
          />
          <div className="grid gap-5 md:grid-cols-3">
            {disciplingMaterials.map((material) => {
              return (
                <article
                  key={material.title}
                  className="overflow-hidden rounded-lg border border-white/12 bg-white/8 shadow-soft"
                >
                  <Image
                    src={material.image}
                    alt={`${material.title} discipling material cover`}
                    width={490}
                    height={686}
                    className="h-auto w-full object-cover"
                  />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="ministries" className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            title="Ministries"
            intro="From children to seniors, MDC seeks to nurture disciples across every phase of life."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {ministries.map((ministry) => {
              const Icon = ministry.icon;
              return (
                <article
                  key={ministry.title}
                  className="rounded-lg border border-navy/8 bg-cream/70 p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-soft"
                >
                  <IconShell>
                    <Icon aria-hidden="true" className="h-6 w-6" />
                  </IconShell>
                  <h3 className="mt-5 font-heading text-2xl font-bold leading-tight text-navy">
                    {ministry.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-navy/70">{ministry.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="bg-navy px-5 py-10 text-white sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 border-t border-white/12 pt-8 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/mdc-logo-make-disciples.png"
                alt=""
                width={445}
                height={355}
                className="h-[72px] w-[72px] rounded bg-white object-contain"
              />
              <p className="font-heading text-2xl font-bold">{church.name}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-5 text-sm font-semibold text-white/72">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-gold">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
