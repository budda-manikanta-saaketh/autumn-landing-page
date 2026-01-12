"use client";

import { useState } from "react";
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

  return (
    <section
      className="
        min-h-screen
        pt-[120px] sm:pt-[140px] lg:pt-[180px]
        pb-20 sm:pb-24 lg:pb-32
      "
    >
      {/* CONTAINER */}
      <div
        className="
          max-w-[1100px]
          lg:max-w-[1300px]
          xl:max-w-[1500px]
          2xl:max-w-[1700px]
          mx-auto
          px-4 sm:px-6
        "
      >
        {/* HEADER */}
        <h1
          className="
            font-bold text-[#5B2C1A] text-center leading-tight
            text-[2.4rem]
            sm:text-[2.8rem]
            md:text-[3.2rem]
            lg:text-[3.8rem]
            xl:text-[4.2rem]
          "
        >
          Contact Us
        </h1>

        <p
          className="
            text-[#666] text-center mx-auto mt-4 leading-relaxed
            max-w-[650px]
            lg:max-w-[750px]
            text-[1.05rem]
            sm:text-[1.1rem]
            lg:text-[1.2rem]
          "
        >
          Have questions? We're here to help. Reach out to our management team
          or send us a message using the form below.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 mt-14 lg:mt-20">
          {/* CONTACT INFO */}
          <div className="bg-white border border-[#eee] shadow-md rounded-[28px] lg:rounded-[36px] p-8 lg:p-12">
            <h2 className="text-[1.7rem] lg:text-[2.1rem] font-semibold text-[#5B2C1A] mb-6">
              Get in Touch
            </h2>

            <div className="space-y-6">
              {[
                {
                  icon: <FaPhoneAlt />,
                  label: "Phone",
                  value: "(615) 648-4099",
                },
                {
                  icon: <FaEnvelope />,
                  label: "Email",
                  value: "AutumnPlaza5@gmail.com",
                },
                {
                  icon: <FaMapMarkerAlt />,
                  label: "Address",
                  value: (
                    <>
                      146 Autumn Towne Way <br />
                      Murfreesboro, TN 37128
                    </>
                  ),
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-[#FBE4DD] flex items-center justify-center text-[#E95522] text-xl lg:text-2xl">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[#666] text-sm">{item.label}</p>
                    <p className="text-[#5B2C1A] font-semibold text-lg lg:text-xl leading-tight">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* MAP */}
            <div
              className="mt-10 rounded-[20px] overflow-hidden border border-[#eee]
              h-[240px] sm:h-[280px] lg:h-[340px] xl:h-[380px]
            "
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25666.652478941474!2d-86.4685!3d35.8425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88640c829c20e94d%3A0x94b0af9b28c16643!2s146%20Autumn%20Towne%20Wy%2C%20Murfreesboro%2C%20TN%2037128%2C%20USA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
          </div>

          {/* FORM */}
          <div className="bg-white shadow-md border border-[#eee] rounded-[28px] lg:rounded-[36px] p-8 lg:p-12">
            <h2 className="text-[1.7rem] lg:text-[2.1rem] font-semibold text-[#5B2C1A] mb-6">
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                {
                  label: "Full Name",
                  value: name,
                  setter: setName,
                  type: "text",
                  placeholder: "Your Name",
                },
                {
                  label: "Email Address",
                  value: email,
                  setter: setEmail,
                  type: "email",
                  placeholder: "Your Email",
                },
                {
                  label: "Phone Number",
                  value: phone,
                  setter: setPhone,
                  type: "text",
                  placeholder: "Your Phone Number",
                },
              ].map((field, i) => (
                <div key={i} className="flex flex-col">
                  <label className="text-[#5B2C1A] font-medium mb-1">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    required
                    value={field.value}
                    onChange={(e) => field.setter(e.target.value)}
                    className="border border-[#ddd] rounded-[12px] px-4 py-3 lg:py-4 outline-none focus:border-[#E95522]"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}

              <div className="flex flex-col">
                <label className="text-[#5B2C1A] font-medium mb-1">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="border border-[#ddd] rounded-[12px] px-4 py-3 lg:py-4 outline-none focus:border-[#E95522]"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`
                  bg-[#E95522] text-white w-full py-4 rounded-full
                  font-semibold text-lg lg:text-xl
                  flex items-center justify-center gap-3 transition
                  ${
                    loading
                      ? "opacity-60 cursor-not-allowed"
                      : "hover:bg-[#cf4a1d]"
                  }
                `}
              >
                <FaPaperPlane />
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* SUCCESS MODAL */}
      {sent && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[2000]">
          <div className="bg-white w-[90%] max-w-[480px] rounded-[28px] p-10 text-center shadow-2xl relative">
            <button
              onClick={() => setSent(false)}
              className="absolute top-4 right-4 text-[#5B2C1A] text-xl hover:text-[#E95522]"
            >
              <FaTimes />
            </button>

            <div className="text-[#E95522] text-5xl flex justify-center mb-4">
              <FaCheckCircle />
            </div>

            <h2 className="text-[1.9rem] font-bold text-[#5B2C1A] mb-3">
              Message Sent!
            </h2>

            <p className="text-[#666] mb-6">
              Thank you for reaching out. Our team will get back to you shortly.
            </p>

            <button
              onClick={() => setSent(false)}
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
