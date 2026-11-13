"use client";
import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "https://formspree.io/f/mwlovovk";

export default function EnquiryForm({ defaultModel = "" }: { defaultModel?: string }) {
  const [status, setStatus] = useState<"idle"|"sending"|"success"|"error">("idle");
  const [message, setMessage] = useState("");
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("source_page", window.location.href);
    setStatus("sending"); setMessage("");
    try {
      const response = await fetch(endpoint, { method: "POST", body: data, headers: { Accept: "application/json" } });
      if (!response.ok) throw new Error("Submission failed");
      setStatus("success"); setMessage("Thank you. Your enquiry has been submitted successfully."); form.reset();
    } catch {
      setStatus("error"); setMessage("We could not submit your enquiry. Please try again or contact us by phone or email.");
    }
  }
  return <form className="enquiry-form" onSubmit={submit}>
    <div className="form-intro"><span className="eyebrow">LET'S START A CONVERSATION</span><h3>Tell us about your plans.</h3><p>Share a few details and the team can guide you on the next steps.</p></div>
    <div className="form-grid">
      <label>Full name *<input name="name" required autoComplete="name" placeholder="Your full name" /></label>
      <label>Mobile number *<input name="mobile" required inputMode="numeric" pattern="[6-9][0-9]{9}" maxLength={10} title="Enter a 10-digit Indian mobile number" placeholder="10-digit mobile number" /></label>
      <label>Email address *<input name="email" type="email" required autoComplete="email" placeholder="you@example.com" /></label>
      <label>City *<input name="city" required placeholder="Your city" /></label>
      <label>State *<input name="state" required placeholder="Your state" /></label>
      <label>Business model *<select name="business_model" required defaultValue={defaultModel}><option value="" disabled>Select an opportunity</option><option>Dealership</option><option>Distributorship</option><option>Super Stockist</option><option>Product / Bulk Enquiry</option></select></label>
      <label className="full">Investment capacity<select name="investment_capacity" defaultValue=""><option value="">Select an approximate range</option><option>Below ₹5 lakh</option><option>₹5–10 lakh</option><option>₹10–20 lakh</option><option>₹20–30 lakh</option><option>Above ₹30 lakh</option><option>Prefer to discuss</option></select></label>
      <label className="full">Your message<textarea name="message" rows={4} placeholder="Tell us about your location, business experience or requirements." /></label>
    </div>
    <label className="consent"><input type="checkbox" name="consent" value="I agree to be contacted regarding this enquiry." required /> <span>I agree to be contacted about this enquiry. I understand my details will be used to respond to this request.</span></label>
    <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="honeypot" aria-hidden="true" />
    <button className="button" disabled={status==="sending"}>{status==="sending" ? "Submitting…" : "Submit Business Enquiry"} <span>↗</span></button>
    {message && <p className={`form-message ${status}`} role="status">{message}</p>}
    <p className="form-privacy">Prefer a direct conversation? <a href={`tel:${site.phone}`}>{site.formattedPhone}</a> · <a href={`mailto:${site.email}`}>{site.email}</a></p>
  </form>;
}
