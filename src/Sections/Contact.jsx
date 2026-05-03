import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { toast, Toaster } from "react-hot-toast";

// New animation variants
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "backOut",
    },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      form.name !== "" &&
      form.email !== "" &&
      form.subject !== "" &&
      form.message !== ""
    ) {
      emailjs
        .send(
          "service_5nv11e7",
          "template_x6gdir9",
          {
            name: form.name,
            email: form.email,
            subject: form.subject,
            message: form.message,
          },
          "QCcKfkMd3uiHc1fFE"
        )
        .then(
          () => {
            toast.success("Message Sent Successfully");
            setForm({
              name: "",
              email: "",
              subject: "",
              message: "",
            });
          },
          (error) => {
            toast.error("Failed " + error.text);
          }
        );
    } else {
      toast.error("Please fill all the fields");
    }
  };

  return (
    <>
      <Toaster
        containerStyle={{ zIndex: 999999 }}
        toastOptions={{
          duration: 4000,
          style: {
            background:
              "linear-gradient(to bottom right, rgba(0,0,0,0.6), rgba(0,0,0,0.4), rgba(126,34,206,0.4))",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "#67e8f9",
            borderRadius: "12px",
            padding: "12px 16px",
            boxShadow: "0 10px 25px rgba(236,72,153,0.35)",
          },
        }}
      />
      <section
        id="contact"
        className="relative min-h-screen flex items-center justify-center overflow-hidden text-white px-4 py-12"
      >
        {/* 📩 Contact Container */}
        <div className="relative z-10 w-full h-full max-w-4xl">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center flex flex-col pb-8 gap-3"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "backOut" }}
              className="text-5xl font-bold bg-linear-to-b from-blue-400 to-cyan-200 bg-clip-text text-transparent"
            >
              Let's Create Together
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-300 max-w-2xl mx-auto"
            >
              Ready to bring your vision to life? Let's discuss your next
              project
            </motion.p>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 gap-8 mt-5 items-start"
          >
            {/* Left Side - Contact Info */}
            <motion.div variants={slideInLeft} className="space-y-6">
              <motion.div variants={scaleIn} className="rounded-2xl p-6">
                <motion.h3 className="text-2xl font-bold mb-4 bg-linear-to-b from-blue-400 to-cyan-200 bg-clip-text text-transparent">
                  Get In Touch
                </motion.h3>

                <div className="space-y-4">
                  <motion.div className="flex items-center space-x-3 p-3 rounded-lg bg-linear-to-br transition-all border border-gray-800 duration-300 cursor-pointer hover:border-cyan-400 hover:shadow-lg hover:shadow-purple-500/25 ">
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      className="w-10 border-gray-800 border h-10 rounded-full flex items-center justify-center"
                    >
                      💬
                    </motion.div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="text-white">abuhuraira3912l@gmail.com</p>
                    </div>
                  </motion.div>

                  <motion.div className="flex items-center border border-gray-800 space-x-3 p-3 rounded-lg transition-all duration-500 cursor-pointer hover:border-cyan-400 hover:shadow-lg hover:shadow-purple-500/25">
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      className="w-10 h-10 border border-gray-800 rounded-full flex items-center justify-center"
                    >
                      🔮
                    </motion.div>
                    <div>
                      <p className="text-sm text-gray-400">Location</p>
                      <p className="text-white">Sahiwal, CCW, Chak 39/12-L</p>
                    </div>
                  </motion.div>
                  <motion.div className="flex items-center border border-gray-800 space-x-3 p-3 rounded-lg transition-all cursor-pointer hover:border-cyan-400 duration-300 hover:shadow-lg hover:shadow-purple-500/25">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6873.184534764088!2d72.70735158864092!3d30.532566498725252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922d5f658d9af63%3A0x55ea01f0590e7f69!2sChak%2039%2F12%20L%2C%20Chichawatni%2C%20Pakistan!5e0!3m2!1sen!2s!4v1766385170253!5m2!1sen!2s"
                      width="100%"
                      height="200"
                      frameBorder="0"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                    ></iframe>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div
              variants={slideInRight}
              className="group relative bg-slate-900/50 border border-slate-800
  rounded-3xl p-8 shadow-2xl overflow-hidden
  transition-all duration-300
  hover:border-cyan-400 hover:shadow-cyan-400/30 hover:shadow-2xl"
            >

               {/* shimmer */}
  <div
    className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent
    -skew-x-12 -translate-x-full group-hover:translate-x-full
    transition-transform duration-700 z-0"
  />
              <motion.div className="relative z-10">
              {/* bg-linear-to-br from-[#21204ba9] to-[#261935a4] */}
              <motion.h3 className="text-white text-2xl mb-6 font-bold">
                Send a Message
              </motion.h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">
                      Your Name
                    </label>
                    <motion.input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full mt-5 hover:border-cyan-400 hover:shadow-lg hover:shadow-purple-500/25  rounded-xl px-4 py-3 text-white placeholder-gray-400 outline-none resize-none border border-gray-800 transition-all duration-300"
                    />
                  </motion.div>

                  <motion.div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">
                      Email Address
                    </label>
                    <motion.input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full mt-5  rounded-xl px-4 py-3 text-white placeholder-gray-400 outline-none resize-none border border-gray-800 hover:border-cyan-400 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/25"
                    />
                  </motion.div>
                </div>

                <motion.div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Subject
                  </label>
                  <motion.input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Project Collaboration"
                    className="w-full mt-5  rounded-xl px-4 py-3 text-white placeholder-gray-400 outline-none resize-none border border-gray-800 hover:border-cyan-400 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/25"
                  />
                </motion.div>

                <motion.div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Your Message
                  </label>
                  <motion.textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Tell me about your project and how we can work together..."
                    className="mt-5 w-full rounded-xl px-4 py-3 text-white placeholder-gray-400 outline-none resize-none border border-gray-800 hover:border-cyan-400 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/25"
                  />
                </motion.div>

                <motion.button
                  variants={scaleIn}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 25px rgba(59, 130, 246, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="text-white text-lg font-medium rounded-lg px-8 py-3 text-center w-full  border-gray-500 border border-gray-800 hover:border-cyan-400 hover:shadow-cyan-400/30 cursor-pointer text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                >
                  <span className="flex items-center justify-center">
                    Send Message
                  </span>
                </motion.button>
              </form>
            </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
