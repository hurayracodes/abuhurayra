import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });



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

  return (
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
            Ready to bring your vision to life? Let's discuss your next project
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

                <motion.div
                  className="flex items-center border border-gray-800 space-x-3 p-3 rounded-lg transition-all cursor-pointer hover:border-cyan-400 duration-300 hover:shadow-lg hover:shadow-purple-500/25"
                >
                  <motion.div
                   whileHover={{ rotate: 15, scale: 1.1 }}
                    className="w-10 h-10 border border-gray-800 rounded-full flex items-center justify-center"
                  >
                    🚀
                  </motion.div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="text-white">+92 (316) 6732581</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center border border-gray-800 space-x-3 p-3 rounded-lg transition-all duration-500 cursor-pointer hover:border-cyan-400 hover:shadow-lg hover:shadow-purple-500/25"
                >
                  <motion.div
                   whileHover={{ rotate: 15, scale: 1.1 }}
                    className="w-10 h-10 border border-gray-800 rounded-full flex items-center justify-center"
                  >
                    🔮
                  </motion.div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-white">Sahiwal, CCW, Chak 16/11-L</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            variants={slideInRight}
            className="border border-white/20 
            overflow-hidden rounded-2xl p-8"
          >
            {/* bg-linear-to-br from-[#21204ba9] to-[#261935a4] */}
            <motion.h3 className="text-white text-2xl mb-6 font-bold">
              Send a Message
            </motion.h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Your Name
                  </label>
                  <motion.input
                    type="text"
                    name="name"
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
      </div>
    </section>
  );
};

export default Contact;
