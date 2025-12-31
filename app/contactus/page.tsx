"use client";

import { useState, useEffect } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCheckCircle,
  FaTimes,
} from "react-icons/fa";

export default function ContactUs() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("access_key", "03079722-bc53-4599-b1ec-37a94fd5a1c4");
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("message", message);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      setSent(true);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  const closeSuccess = () => setSent(false);

  return (
    <section className="pt-[140px] pb-20 relative">
      <div className="max-w-[1100px] mx-auto px-6">
        <h1 className="text-[2.5rem] md:text-[3rem] font-bold text-[#5B2C1A] text-center leading-tight">
          Contact Us
        </h1>

        <p className="text-[#666] max-w-[650px] mx-auto mt-4 text-center text-[1.05rem] leading-relaxed">
          Have questions? We're here to help. Reach out to our management team
          or send us a message using the form below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14">
          <div className="bg-white border border-[#eee] shadow-md rounded-[28px] p-8">
            <h2 className="text-[1.6rem] font-semibold text-[#5B2C1A] mb-6">
              Get in Touch
            </h2>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FBE4DD] flex items-center justify-center text-[#E95522] text-xl">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="text-[#666] text-sm">Phone</p>
                  <p className="text-[#5B2C1A] font-semibold text-lg">
                    (615) 648-4099
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FBE4DD] flex items-center justify-center text-[#E95522] text-xl">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-[#666] text-sm">Email</p>
                  <p className="text-[#5B2C1A] font-semibold text-lg">
                    AutumnPlaza5@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FBE4DD] flex items-center justify-center text-[#E95522] text-xl">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-[#666] text-sm">Address</p>
                  <p className="text-[#5B2C1A] font-semibold text-lg leading-tight">
                    146 Autumn Towne Way <br />
                    Murfreesboro, TN 37128
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10 rounded-[20px] overflow-hidden border border-[#eee] h-[230px] md:h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25666.652478941474!2d-86.4685!3d35.8425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88640c829c20e94d%3A0x94b0af9b28c16643!2s146%20Autumn%20Towne%20Wy%2C%20Murfreesboro%2C%20TN%2037128%2C%20USA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="bg-white shadow-md border border-[#eee] rounded-[28px] p-8">
            <h2 className="text-[1.6rem] font-semibold text-[#5B2C1A] mb-6">
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="hidden"
                name="access_key"
                value="YOUR_WEB3FORMS_KEY"
              />

              <div className="flex flex-col">
                <label className="text-[#5B2C1A] font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border border-[#ddd] rounded-[12px] px-4 py-3 outline-none focus:border-[#E95522]"
                  placeholder="Your Name"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-[#5B2C1A] font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-[#ddd] rounded-[12px] px-4 py-3 outline-none focus:border-[#E95522]"
                  placeholder="Your Email"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-[#5B2C1A] font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="border border-[#ddd] rounded-[12px] px-4 py-3 outline-none focus:border-[#E95522]"
                  placeholder="Your Phone Number"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-[#5B2C1A] font-medium mb-1">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="border border-[#ddd] rounded-[12px] px-4 py-3 outline-none focus:border-[#E95522]"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`bg-[#E95522] text-white w-full py-3.5 rounded-full 
                font-semibold text-lg flex items-center justify-center
                gap-3 transition ${
                  loading
                    ? "opacity-60 cursor-not-allowed"
                    : "hover:bg-[#cf4a1d]"
                }`}
              >
                <FaPaperPlane />
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {sent && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[2000] animate-fadeIn">
          <div className="bg-white w-[90%] max-w-[450px] rounded-[28px] p-10 text-center shadow-2xl relative">
            <button
              className="absolute top-4 right-4 text-[#5B2C1A] text-xl hover:text-[#E95522]"
              onClick={closeSuccess}
            >
              <FaTimes />
            </button>

            <div className="text-[#E95522] text-5xl flex justify-center mb-4">
              <FaCheckCircle />
            </div>

            <h2 className="text-[1.8rem] font-bold text-[#5B2C1A] mb-3">
              Message Sent!
            </h2>

            <p className="text-[#666] mb-6">
              Thank you for reaching out. Our team will get back to you shortly.
            </p>

            <button
              onClick={closeSuccess}
              className="bg-[#E95522] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#cf4a1d] transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
