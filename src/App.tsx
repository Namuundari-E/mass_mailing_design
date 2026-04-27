import type { ReactNode } from 'react';
import {
  ArrowRight,
  Facebook,
  Instagram,
  Twitter,
  ExternalLink,
  Zap,
  Lightbulb,
  Globe,
  Info,
  type LucideIcon,
} from 'lucide-react';

const displayFont = { fontFamily: "'Instrument Serif', serif" } as const;

const officialLinks = {
  website: 'https://www.g-insight.mn/',
  instagram: 'https://www.instagram.com/insightresearchcompany/',
  facebook: 'https://www.facebook.com/insightresearchmn',
};

const socialIcons: Array<{ label: string; Icon: LucideIcon; href: string }> = [
  { label: 'Instagram', Icon: Instagram, href: officialLinks.instagram },
  { label: 'Facebook', Icon: Facebook, href: officialLinks.facebook },
  { label: 'Website', Icon: Globe, href: officialLinks.website },
];

type SectionProps = {
  number: string;
  title: string;
  content: string;
};

function ResearchSection({ number, title, content }: SectionProps) {
  return (
    <div className="mb-12 text-left">
      <div className="mb-3 flex items-center gap-3">
        <span className="text-[14px] font-bold tracking-widest text-brand">{number}</span>
        <div className="h-px flex-1 bg-white/10" />
      </div>
      <h3 className="mb-4 text-[28px] leading-tight text-white sm:text-[32px]" style={displayFont}>
        {title}
      </h3>
      <p className="text-[17px] leading-[1.6] text-[#A0A0A0]">{content}</p>
    </div>
  );
}

function Divider() {
  return (
    <div className="flex justify-center py-10">
      <div className="h-px w-24 bg-white/20" />
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-[#050505] px-4 py-12 font-sans" id="top">
      <div className="mx-auto max-w-[600px] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/5">
        <div className="bg-[#111111] text-[#F2F2F4]">

          {/* Header */}
          <header className="flex flex-col items-center px-6 pt-10 text-center">
            <div className="mb-8">
              <p className="text-[24px] leading-[0.95] tracking-tight text-white" style={displayFont}>
                Insight Research
              </p>
            </div>
          </header>

          {/* Hero Section */}
          <section className="relative w-full overflow-hidden pb-12">
            <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-white/10 shadow-inner">
              <video
                autoPlay
                className="h-full w-full object-cover"
                loop
                muted
                playsInline
                src="/video.mp4"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
            </div>

            <div className="mt-10 px-6 text-center">
              <h1
                className="text-[42px] leading-[1.1] tracking-tight text-white sm:text-[52px]"
                style={displayFont}
              >
                AI-ийн Шинэ Ирээдүй:
                <br />
                Egune API-г Нээгээрэй
              </h1>
              <p className="mt-6 text-[19px] leading-[1.5] text-[#D0D0D0]">
                Egune AI API таны бизнесийг хэрхэн өөрчлөхийг мэдэх үү?
              </p>
            </div>
          </section>

          <Divider />

          {/* Main Content Sections */}
          <section className="px-8 pb-10 sm:px-12">
            <ResearchSection
              content="Орчин үеийн дижитал ертөнцөд хиймэл оюун ухаан (AI) нь бизнесийн салбарт хувьсгал хийж байна. Egune AI API нь энэхүү хүчирхэг технологийг таны үйлчилгээ, програмд хялбархан нэгтгэх боломжийг олгодог дэвшилтэт шийдэл юм. Энэхүү API нь программ зохиогчид болон бизнесийн байгууллагуудад өөрсдийн бүтээгдэхүүнийг илүү ухаалаг, үр ашигтай болгоход тусалдаг."
              number="01"
              title="Egune AI API гэж юу вэ?"
            />

            <p className="mb-12 text-[17px] leading-[1.6] text-[#A0A0A0]">
              Таны бизнесийн хэмжээ хамаарахгүйгээр, Egune AI API нь хиймэл оюун ухааны нарийн төвөгтэй алгоритмуудыг ойлгохгүйгээр ч AI-ийн хүчийг ашиглах боломжийг нээж өгнө.
            </p>

            <ResearchSection
              content="Egune AI API-ийг ашиглан та хэрэглэгчийн үйлчилгээг автоматжуулах, өгөгдөл шинжлэх, контент үүсгэх, хувийн тохиргоотой зөвлөмж өгөх зэрэг олон төрлийн шийдлүүдийг хэрэгжүүлэх боломжийг олгодог. Энэ нь таны бизнесийн үйл ажиллагааг хялбаршуулж, цаг хугацаа болон нөөцийг хэмнэхээс гадна хэрэглэгчийн сэтгэл ханамжийг нэмэгдүүлнэ."
              number="02"
              title="Боломжууд ба Ирээдүйн Өөрчлөлт"
            />

            <p className="text-[17px] leading-[1.6] text-[#A0A0A0]">
              Ирээдүйд Egune AI API нь салбар бүрт инновацийг хурдасгаж, бизнесийн шинэ боломжуудыг бий болгоно. Хүн төрөлхтний өдөр тутмын амьдрал болон ажлын арга барилыг өөрчлөх энэхүү шинэ технологийн ирээдүй нэгэнт эхэлжээ.
            </p>
          </section>

          {/* Highlight Box */}
          <section className="px-6 pb-12 sm:px-12">
            <div className="relative overflow-hidden rounded-2xl bg-brand p-8 text-white">
              <Lightbulb className="absolute -right-4 -top-4 h-24 w-24 opacity-10" />
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-black/10">
                  <span className="text-[20px]">💡</span>
                </div>
                <p className="text-[18px] font-medium leading-[1.5]">
                  Egune AI API нь хиймэл оюун ухааныг бизнест нэвтрүүлэх үйл явцыг хялбарчилж, цаг хугацаа болон нөөцийг хэмнэнэ.
                </p>
              </div>
            </div>
          </section>

          {/* Fun Fact Section */}
          <section className="px-6 pb-12 sm:px-12">
            <div className="flex items-center gap-6 rounded-2xl border border-white/10 bg-white/5 p-8 transition-colors hover:bg-white/[0.08]">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand">
                <Zap className="h-6 w-6" fill="currentColor" />
              </div>
              <div>
                <p className="text-[12px] font-bold tracking-widest text-brand">FUN FACT</p>
                <p className="mt-1 text-[16px] leading-[1.5] text-[#D0D0D0]">
                  Дэлхийн томоохон компаниудын 80 гаруй хувь нь өнөөдөр ямар нэгэн хэлбэрээр AI API ашиглаж байна.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Button */}
          <section className="px-6 pb-16 pt-4 text-center">
            <a
              className="group inline-flex items-center gap-3 rounded-full bg-white px-10 py-5 text-[18px] font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-brand hover:text-white"
              href="#read-more"
            >
              <span>Дэлгэрэнгүй унших</span>
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={3} />
            </a>
          </section>

          {/* Footer */}
          <footer className="border-t border-white/5 bg-[#080808] px-6 py-14 text-center sm:px-12">
            <div className="mb-10">
              <p className="text-[26px] leading-[0.95] tracking-tight text-white" style={displayFont}>
                Insight Research
              </p>
            </div>

            <div className="mb-10 flex justify-center gap-4">
              {socialIcons.map(({ Icon, label, href }) => (
                <a
                  aria-label={label}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-white transition-all duration-200 hover:border-brand hover:bg-brand hover:text-white"
                  href={href}
                  key={label}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            <div className="space-y-4 text-[13px] text-[#83837D]">
              <p className="leading-relaxed">
                Энэ имэйлийг бид танд мэдээллийн товхимолд бүртгүүлсэн учир илгээж байна.
              </p>
              <div className="flex items-center justify-center gap-4 text-[12px] font-medium text-white/40">
                <a className="hover:text-white" href="#unsubscribe">Unsubscribe</a>
                <span className="h-1 w-1 rounded-full bg-white/20" />
                <a className="hover:text-white" href="#privacy">Privacy Policy</a>
                <span className="h-1 w-1 rounded-full bg-white/20" />
                <a className="hover:text-white" href="#preferences">Manage Preferences</a>
              </div>
              <p className="pt-6 text-[11px] opacity-40">
                © 2026 INSIGHT RESEARCH. ALL RIGHTS RESERVED.
              </p>
            </div>
          </footer>
        </div>
      </div>

      {/* Back to top indicator */}
      <div className="mt-8 flex justify-center">
        <a className="flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-white/30 transition-colors hover:text-brand" href="#top">
          BACK TO TOP <ArrowRight className="h-3 w-3 -rotate-90" />
        </a>
      </div>
    </div>
  );
}

export default App;
