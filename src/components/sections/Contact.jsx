import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("Your message was sent successfully! I’ll be in touch soon.");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  // Replace with your actual usernames/numbers
  const socialLinks = [
    {
      href: "https://www.instagram.com/sagetheriot/",
      label: "Instagram",
      icon: (
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
          <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" />
          <circle cx="12" cy="12" r="4" stroke="currentColor" />
          <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
        </svg>
      )
    },
    {
      href: "https://wa.me/2348182006156", // , no + or spaces
      label: "WhatsApp",
      icon: (
        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
          <path d="M16 3C9.373 3 4 8.373 4 15c0 2.513.741 4.85 2.018 6.827L4.145 28.261a1.01 1.01 0 0 0 1.262 1.26l6.432-1.868C13.178 28.264 14.57 28.5 16 28.5c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22.5a9.48 9.48 0 0 1-4.837-1.307l-.346-.194-3.82 1.11 1.108-3.726-.207-.352A9.495 9.495 0 1 1 16 25.5zm5.363-7.234c-.293-.147-1.734-.855-2.003-.951-.269-.098-.466-.146-.662.147-.195.293-.757.951-.929 1.146-.171.195-.342.22-.634.073-1.734-.855-2.872-1.512-4.02-3.42-.304-.522.304-.484.881-1.607.098-.195.049-.366-.024-.513-.073-.146-.662-1.6-.906-2.19-.237-.57-.479-.492-.662-.5-.171-.007-.366-.009-.561-.009a1.08 1.08 0 0 0-.781.366c-.268.293-1.025 1-.999 2.439.027 1.44 1.029 2.835 1.174 3.029.146.195 2.028 3.098 5.458 4.228.763.206 1.356.329 1.82.42.764.144 1.47.124 2.021.075.617-.056 1.891-.772 2.158-1.519.268-.747.268-1.385.195-1.519-.073-.134-.268-.22-.561-.366z"/>
        </svg>
      )
    },
    {
      href: "tel:+2348034248841",
      label: "Phone",
      icon: (
        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6.62 10.79a15.03 15.03 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C7.82 21 3 16.18 3 10a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.35.27 2.67.76 3.88a1 1 0 0 1-.21 1.11l-2.2 2.2z"/>
        </svg>
      ),
      display: "+234 803 424 8841"
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>
          {/* Social Media Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {socialLinks.map(({ href, icon, label, display }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center bg-white/5 border border-white/10 rounded px-4 py-2 text-white font-medium transition-all duration-200 hover:bg-blue-500/20 focus:bg-blue-500/20 focus:outline-none focus:ring-2 focus:ring-blue-400 active:scale-95"
                aria-label={label}
              >
                {icon}
                <span className="whitespace-nowrap">{display || label}</span>
              </a>
            ))}
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your Message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};