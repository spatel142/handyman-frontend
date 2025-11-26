import { useState } from "react";

const API = import.meta.env.VITE_API_BASE ;
export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch(`${API}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to send message");

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("❌ Contact error:", err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <h2 style={{color:"rgb(3 54 73 )"}}  className="text-center  fw-bold mb-4">
          Contact Us
        </h2>

        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <form
              onSubmit={handleSubmit}
              className="card shadow border-0 p-4 bg-white"
            >
              <div className="mb-3">
                <label className="form-label fw-semibold">Your Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Your Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  className="form-control"
                  placeholder="Write your message here..."
                  value={form.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                style={{backgroundColor:"rgb(3 54 73 / 84%)", color:"white"}}
                className="btn  w-100 fw-semibold"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <div className="alert alert-success mt-3">
                  ✅ Message sent successfully!
                </div>
              )}
              {status === "error" && (
                <div className="alert alert-danger mt-3">
                  ❌ Failed to send message. Please try again later.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
