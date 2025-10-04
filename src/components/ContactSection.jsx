import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Map,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { cn } from "@/lib/utils";

const ContactSection = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault(); 

    setIsSending(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_gyanendra_25", 
        "template_map34wm", 
        form.current,
        "QW4PAgDj6zZmvWHZG"
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setIsSending(false);
          form.current.reset();
        },
        () => {
          setStatus("❌ Failed to send message. Try again.");
          setIsSending(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 sm:px-12 md:px-20 lg:px-24 relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-sm md:text-base">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:hello@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors break-words"
                  >
                    hello@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+917849007882"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 7849007882
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                  <Map className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">Odisha, Rayagada, Gunupur</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center md:justify-start">
                <a href="#" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin />
                </a>
                <a href="#" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter />
                </a>
                <a href="#" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook />
                </a>
                <a href="#" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-6 sm:p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-6">Send Message</h3>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Gyanendra Sahoo..."
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="gyanendra@gmail.com..."
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>
              <button
                type="submit"
                disabled={isSending}
                className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
              >
                {isSending ? "Sending..." : "Send Message"} <Send size={16} />
              </button>

              {status && (
                <p className="text-center text-sm mt-3 text-muted-foreground">{status}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
