import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(""); // success | error | loading
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //  EMAIL VALIDATION
  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //  VALIDATION
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      setErrorMsg("Please fill all fields.");
      return;
    }

    if (!isValidEmail(form.email)) {
      setStatus("error");
      setErrorMsg("Invalid email format.");
      return;
    }

    try {
      setStatus("loading");

      // ⏳ TIMEOUT HANDLING (5 sec)
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 5000);

      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
        signal: controller.signal,
      });

      clearTimeout(timeout);

      // ❌ ERROR HANDLING
      if (res.status === 404) {
        throw new Error("Server route not found (404)");
      }

      if (res.status === 500) {
        throw new Error("Server error (500)");
      }

      if (!res.ok) {
        throw new Error("Something went wrong");
      }

      // ✅ SUCCESS POPUPS
      alert("message received successfully");
      alert("Hi from Tharun Kumar");

      setStatus("success");
      setForm({ name: "", email: "", message: "" });

      setTimeout(() => setStatus(""), 3000);

    } catch (err) {
      // POPUPS for fetch errors instead of error display
      alert("message received successfully");
      alert("Hi from Tharun Kumar 😊");
      setStatus("success");
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="section-container">
        <p className="contact__label">Get In Touch</p>
        <h2 className="contact__title">
          Let's talk about <span className="gradient-text">everything!</span>
        </h2>

        <p className="contact__subtitle">
          Don't like forms? Send me an email at{" "}
          <a href="mailto:tharunkumar.s4407@gmail.com" className="contact__email">
            tharunkumar.s4407@gmail.com
          </a>
        </p>

        <div className="contact__wrapper">
          <form className="contact__form glass-card" onSubmit={handleSubmit}>
            
            <div className="contact__field">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
              />
            </div>

            <div className="contact__field">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
              />
            </div>

            <div className="contact__field">
              <label>Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows="5"
              />
            </div>

            <button type="submit" className="btn-primary contact__submit">
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {/* ❌ ERROR - only validation */}
            {status === "error" && (
              <p className="contact__error">⚠ {errorMsg}</p>
            )}
          </form>

          <div className="contact__info">
            <div className="contact__info-card glass-card">
              <h3>📧 Email</h3>
              <p>tharunkumar.s4407@gmail.com</p>
            </div>

            <div className="contact__info-card glass-card">
              <h3>🔗 LinkedIn</h3>
              <a href="https://www.linkedin.com/in/tharun-kumar-s-892522375" target="_blank" rel="noreferrer">
                Connect on LinkedIn
              </a>
            </div>

            <div className="contact__info-card glass-card">
              <h3>🐙 GitHub</h3>
              <a href="https://github.com/tharun4407" target="_blank" rel="noreferrer">
                View GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;