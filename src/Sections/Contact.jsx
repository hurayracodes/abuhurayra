"use client";
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { ArrowRight } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import TitleHeader from "../ui/TitleHeader";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Debug: Check env variables on mount
  useEffect(() => {
    console.log("🔍 Environment Variables Check:");
    console.log("Service ID:", import.meta.env.VITE_EMAILJS_SERVICE_ID ? "✅ Loaded" : "❌ Missing");
    console.log("Template ID:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID ? "✅ Loaded" : "❌ Missing");
    console.log("Public Key:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY ? "✅ Loaded" : "❌ Missing");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("Missing environment variables");
      toast.error("Configuration error. Please contact support!", {
        duration: 4000,
        position: "top-right",
        icon: "⚠️",
      });
      setLoading(false);
      return;
    }

    try {
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );
      
      console.log("EmailJS Response:", result);
      
      setForm({ name: "", email: "", message: "" });
      
      // ✅ Success Toast
      toast.success("Message sent successfully! 🎉", {
        duration: 4000,
        position: "top-right",
        icon: "✅",
        style: {
          background: "#10b981",
          color: "#fff",
          fontWeight: "bold",
        },
      });
      
    } catch (error) {
      console.error("EmailJS Full Error:", error);
      
      // ❌ Error Toast
      toast.error(error.text || "Failed to send message. Please try again!", {
        duration: 4000,
        position: "top-right",
        icon: "❌",
        style: {
          background: "#ef4444",
          color: "#fff",
          fontWeight: "bold",
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative pt-10 overflow-hidden" id="contact">
      {/* Toaster component for toast notifications */}
      <Toaster 
        position="top-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 4000,
            iconTheme: {
              primary: '#10b981',
              secondary: '#fff',
            },
          },
          error: {
            duration: 4000,
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />
      
      <main className="min-h-screen flex items-center justify-center flex-col pb-12 px-4 sm:px-6 lg:px-16">
        <div className="w-full max-w-2xl mx-auto mt-16">
          <TitleHeader
            title="Work With Me Let's bring your"
            subTitle=" ideas to life"
          />
          <div className="rounded-xl border border-gray-700 p-8 md:p-10">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="w-full flex flex-col gap-6"
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-gray-300 font-medium text-sm">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your good name?"
                  required
                  className="w-full px-4 py-3 bg-gray-900/40 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-gray-300 font-medium text-sm">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your email address?"
                  required
                  className="w-full px-4 py-3 bg-gray-900/40 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-gray-300 font-medium text-sm">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  rows="5"
                  required
                  className="w-full px-4 py-3 bg-gray-900/40 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 relative overflow-hidden rounded-lg bg-gradient-to-r from-purple-900 to-cyan-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-cyan-500/25"
              >
                <div className="relative flex items-center justify-center gap-2 py-3 px-6">
                  <span className="text-white font-medium">
                    {loading ? "Sending..." : "Send Message"}
                  </span>
                  {!loading && (
                    <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
                  )}
                </div>
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;