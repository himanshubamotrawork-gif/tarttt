import { useState, useEffect } from "react";
import {
  ShieldCheck,
  Truck,
  Gift,
  Zap,
  Lock,
  Star,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

const faqs = [
  {
    q: "How long does it take?",
    a: "The entire process takes less than 2 minutes. Simply click Get Started, complete the short verification, and your gift card is on its way.",
  },
  {
    q: "When will I receive my gift card?",
    a: "Gift cards are delivered digitally within minutes of completing the claim process. Check your email inbox right after.",
  },
  {
    q: "Can I use it for anything at Target?",
    a: "Yes! Your $750 Target gift card works on any product, both in-store and online at Target.com — including groceries, electronics, clothing, and more.",
  },
];

const testimonials = [
  {
    initials: "SM",
    name: "Sarah M.",
    quote:
      '"Couldn\'t believe it actually worked! Used my $750 on groceries and a new coffee maker. So happy!"',
  },
  {
    initials: "JR",
    name: "James R.",
    quote:
      '"Quick and easy. Took me about 2 minutes total. Already shopping with my gift card!"',
  },
  {
    initials: "PK",
    name: "Priya K.",
    quote:
      '"Was skeptical at first, but it was legit. Great deal — thank you Target!"',
  },
];

function StarRow() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={16} className="fill-red-500 text-red-500" />
      ))}
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border-b border-gray-100 last:border-0 cursor-pointer select-none"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between py-4 px-1 gap-3">
        <span className="font-semibold text-gray-900 text-sm">{q}</span>
        <ChevronDown
          size={18}
          className={`text-gray-400 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </div>
      {open && (
        <p className="text-sm text-gray-500 pb-4 px-1 leading-relaxed">{a}</p>
      )}
    </div>
  );
}

function useFlicker(base: number, variance: number, intervalMs: number) {
  const [value, setValue] = useState(base);
  useEffect(() => {
    const id = setInterval(() => {
      const delta = Math.floor(Math.random() * variance * 2 + 1) - variance;
      setValue((v) => {
        const next = v + delta;
        return next < base - variance * 3 ? base : next > base + variance * 3 ? base : next;
      });
    }, intervalMs);
    return () => clearInterval(id);
  }, [base, variance, intervalMs]);
  return value;
}

export default function App() {
  const onlineCount = useFlicker(2503, 4, 2800);
  const claimedCount = useFlicker(1691, 2, 4200);

  return (
    <div className="min-h-screen bg-[#f0f0f0] font-sans flex flex-col items-center py-8 px-4">
      {/* Online indicator */}
      <div className="bg-white rounded-full px-4 py-1.5 flex items-center gap-2 shadow-sm mb-6">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-sm text-gray-700 font-medium">{onlineCount.toLocaleString()} online now</span>
      </div>

      {/* Target logo */}
      <div className="mb-6">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="30" fill="#CC0000" />
          <circle cx="32" cy="32" r="18" fill="white" />
          <circle cx="32" cy="32" r="8" fill="#CC0000" />
        </svg>
      </div>

      {/* Hero card */}
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-md p-6 mb-4">
        {/* Headline */}
        <h1 className="text-2xl font-extrabold text-gray-900 text-center leading-tight mb-2">
          Get a <span className="text-red-600">$750</span> Target<br />Gift Card
        </h1>
        <p className="text-sm text-gray-400 text-center mb-5 leading-relaxed">
          Your reward is waiting. Claim it today and treat yourself!
        </p>

        {/* Gift card visual */}
        <div className="rounded-xl bg-gray-900 p-5 mb-5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/5 translate-x-8 -translate-y-8" />
          <div className="absolute bottom-0 right-6 w-20 h-20 rounded-full border-[6px] border-white/10" />
          <div className="flex items-start justify-between mb-4">
            <span className="text-gray-400 text-[10px] uppercase tracking-widest font-semibold">Gift Card</span>
            <span className="flex items-center gap-1.5 text-white text-sm font-bold">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              Target
            </span>
          </div>
          <div>
            <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-1">Your Reward</p>
            <p className="text-white text-4xl font-black">$750</p>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => window.open("https://linkthem.net/aff_c?offer_id=1178&aff_id=17763", "_blank", "noopener,noreferrer")}
          className="w-full bg-red-600 hover:bg-red-700 active:scale-[0.98] transition-all text-white font-bold text-base py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-red-200 mb-4"
        >
          Get Started <ArrowRight size={18} />
        </button>

        {/* Trust badges */}
        <div className="flex items-center justify-center gap-6 mb-5">
          <span className="flex items-center gap-1.5 text-xs text-gray-500">
            <ShieldCheck size={14} className="text-red-500" /> Verified offer
          </span>
          <span className="flex items-center gap-1.5 text-xs text-gray-500">
            <Truck size={14} className="text-red-500" /> Instant delivery
          </span>
        </div>

        <div className="border-t border-gray-100 pt-4 flex items-center justify-center gap-3">
          {/* Avatar initials */}
          <div className="flex -space-x-2">
            {["FG", "DS", "DS", "IK"].map((init, i) => (
              <div
                key={i}
                className="w-7 h-7 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-[9px] font-bold text-gray-600"
              >
                {init}
              </div>
            ))}
          </div>
          <span className="text-sm text-gray-600">
            <strong>{claimedCount.toLocaleString()}</strong> claimed today
          </span>
        </div>
      </div>

      {/* Why claim section */}
      <div className="w-full max-w-sm mb-4">
        <h2 className="text-xl font-extrabold text-gray-900 text-center mb-4">
          Why claim today?
        </h2>
        <div className="flex flex-col gap-3">
          {[
            {
              icon: <Gift size={20} className="text-red-500" />,
              title: "$750 to spend anywhere",
              desc: "Use your gift card on any product at Target — in store or online.",
            },
            {
              icon: <Zap size={20} className="text-red-500" />,
              title: "Takes less than a minute",
              desc: "Quick claim process. No lengthy forms, no hidden steps.",
            },
            {
              icon: <Lock size={20} className="text-red-500" />,
              title: "Secure & verified",
              desc: "Official member rewards program. Your information stays private.",
            },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-4 flex items-start gap-4 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm mb-0.5">{item.title}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Social proof header */}
      <div className="w-full max-w-sm text-center mb-4 mt-2">
        <div className="flex justify-center mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={22} className="fill-red-500 text-red-500" />
          ))}
        </div>
        <h2 className="text-xl font-extrabold text-gray-900">Loved by thousands</h2>
        <p className="text-sm text-gray-400 mt-1">4.9 / 5 from 12,400+ verified members</p>
      </div>

      {/* Testimonials */}
      <div className="w-full max-w-sm flex flex-col gap-3 mb-4">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold text-xs shrink-0">
                {t.initials}
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                <StarRow />
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">{t.quote}</p>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <div className="w-full max-w-sm mb-4">
        <h2 className="text-xl font-extrabold text-gray-900 text-center mb-4">
          Frequently asked questions
        </h2>
        <div className="bg-white rounded-2xl shadow-sm px-5 py-1">
          {faqs.map((faq, i) => (
            <FaqItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="w-full max-w-sm bg-gray-900 rounded-2xl p-6 mb-6">
        <h2 className="text-xl font-extrabold text-white text-center mb-2 leading-snug">
          Ready to claim your <span className="text-red-500">$750</span>?
        </h2>
        <p className="text-sm text-gray-400 text-center mb-5">
          Join thousands of members already shopping at Target.
        </p>
        <button
          onClick={() => window.open("https://linkthem.net/aff_c?offer_id=1178&aff_id=17763", "_blank", "noopener,noreferrer")}
          className="w-full bg-red-600 hover:bg-red-700 active:scale-[0.98] transition-all text-white font-bold text-base py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-red-900/40"
        >
          Claim Your Gift Card <ArrowRight size={18} />
        </button>
      </div>

      {/* Footer */}
      <div className="text-center pb-4">
        <p className="text-sm text-gray-500 mb-1">
          Expect More. Pay Less.{" "}
          <span className="inline-flex items-center gap-1 text-green-600 font-medium">
            <ShieldCheck size={13} /> Verified Offer
          </span>
        </p>
        <p className="text-xs text-gray-400">© Target Corporation 2025</p>
      </div>
    </div>
  );
}
