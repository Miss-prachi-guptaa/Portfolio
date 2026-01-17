import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FiUser, FiMail, FiMessageSquare, FiSend } from "react-icons/fi";


const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )


      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.error(error);
          alert("Failed to send message. Try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center
                 bg-gradient-to-b from-[#020617] via-[#020617] to-[#020617] px-4"
    >
      <div className="w-full max-w-4xl text-center">

        {/* Heading */}
        <p className="text-yellow-400 text-xs tracking-[0.3em] mb-3">
          ● GET IN TOUCH
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Let's <span className="text-yellow-400">Connect</span>
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto mb-12">
          Have a project in mind or just want to chat? I’d love to hear from you!
        </p>

        {/* Card */}
        <div className="bg-white/5 backdrop-blur-lg border border-white/10
                        rounded-2xl p-8 max-w-2xl mx-auto shadow-lg">

          <form ref={formRef} onSubmit={sendEmail}>

            {/* Name */}
            <div className="mb-6 text-left">
              <label className="text-sm text-white mb-2 block">
                Name <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="from_name"       // ✅ REQUIRED
                  required
                  placeholder="Your full name"
                  className="w-full bg-[#1f2937] text-white
                             pl-12 pr-4 py-3 rounded-lg
                             border border-white/10
                             focus:ring-2 focus:ring-yellow-400"
                />
              </div>
            </div>

            {/* Email */}
            <div className="mb-6 text-left">
              <label className="text-sm text-white mb-2 block">
                Email <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  name="from_email"     // ✅ REQUIRED
                  required
                  placeholder="your.email@example.com"
                  className="w-full bg-[#1f2937] text-white
                             pl-12 pr-4 py-3 rounded-lg
                             border border-white/10
                             focus:ring-2 focus:ring-yellow-400"
                />
              </div>
            </div>

            {/* Message */}
            <div className="mb-8 text-left">
              <label className="text-sm text-white mb-2 block">
                Message <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <FiMessageSquare className="absolute left-4 top-4 text-gray-400" />
                <textarea
                  name="message"        // ✅ REQUIRED
                  rows="5"
                  required
                  placeholder="Tell me about your project or just say hello..."
                  className="w-full bg-[#1f2937] text-white
                             pl-12 pr-4 py-3 rounded-lg
                             border border-white/10
                             focus:ring-2 focus:ring-yellow-400
                             resize-none"
                />
              </div>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500
                         text-black font-semibold py-3 rounded-lg
                         flex items-center justify-center gap-2
                         transition active:scale-95"
            >
              <FiSend />
              Send Message
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;