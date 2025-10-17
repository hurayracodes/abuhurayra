import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-white px-4 py-12">
      {/* 🌌 Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0c10] via-[#0b0c20] to-[#0b0c30] z-0" />

      {/* ✨ Stars layers */}
      <div className="absolute inset-0 z-0">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>

      {/* 📩 Contact Container */}
      <div className="relative z-10 w-full h-full max-w-4xl">
        {/* Header Section */}
        <div className="text-center flex flex-col gap-3">
          <h2 className="text-5xl font-bold bg-gradient-to-b from-blue-400 to-cyan-200 bg-clip-text text-transparent">
            Let's Create Together
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's discuss your next project
          </p>
        </div>

        {/* Contact Form */}
        <div className="grid md:grid-cols-2 gap-8 mt-5 items-start">
          {/* Left Side - Contact Info */}
          <div className="space-y-6">
            <div className="rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Get In Touch
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white">abuhuraira3912l@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="text-white">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-white">New York, NY</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="border border-white/20 bg-gradient-to-br from-[#21204ba9] to-[#261935a4] overflow-hidden transition-transform duration-300 hover:scale-[1.03] hover:shadow-lg rounded-2xl p-8">
          <h3 className="text-white text-2xl mb-6 font-bold">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    onChange={handleChange}
                    value={form.name}
                    className="w-full bg-blue-400/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 outline-none resize-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    onChange={handleChange}
                    value={form.email}
                    className="w-full bg-blue-400/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 outline-none resize-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Project Collaboration"
                  onChange={handleChange}
                  value={form.subject}
                  className="w-full bg-blue-400/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 outline-none resize-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Your Message</label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell me about your project and how we can work together..."
                  onChange={handleChange}
                  value={form.message}
                  className="w-full bg-blue-400/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className='text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-8 py-3 text-center me-2 mb-2 dark:border-purple-400 dark:hover:bg-purple-500 dark:focus:ring-purple-900'
              >
                <span className="flex items-center justify-center">
                  Send Message
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* 🌟 Stars animation */}
      <style>{`
        .stars, .stars2, .stars3 {
          position: absolute;
          width: 2px;
          height: 2px;
          background: transparent;
          box-shadow: 
            1000px 2000px #fff,
            500px 300px #fff,
            1500px 1200px #fff,
            700px 800px #fff,
            1300px 900px #fff,
            200px 1500px #fff,
            900px 1800px #fff;
          animation: animStar 50s linear infinite;
        }
        .stars2 {
          width: 3px;
          height: 3px;
          box-shadow:
            800px 1000px #fff,
            300px 600px #fff,
            1600px 700px #fff,
            900px 1200px #fff,
            1400px 500px #fff;
          animation: animStar 100s linear infinite;
        }
        .stars3 {
          width: 1px;
          height: 1px;
          box-shadow:
            600px 1100px #fff,
            1200px 300px #fff,
            1000px 800px #fff,
            400px 700px #fff,
            1500px 400px #fff;
          animation: animStar 150s linear infinite;
        }
        @keyframes animStar {
          from { transform: translateY(0px); }
          to { transform: translateY(-2000px); }
        }
      `}</style>
    </section>
  );
};

export default Contact;