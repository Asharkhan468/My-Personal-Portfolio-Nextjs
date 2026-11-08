"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, LoaderCircle } from "lucide-react";

type SubmissionState = "idle" | "sending" | "success" | "error";

const formEndpoint = "https://formspree.io/f/mrbggenw";

export default function ContactForm() {
  const [state, setState] = useState<SubmissionState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setState("sending");

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error(`Contact form request failed with status ${response.status}`);
      }

      setState("success");
      form.reset();
    } catch (error) {
      console.error("Unable to submit project inquiry.", error);
      setState("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label className="form-field">
          <span>Name <span aria-hidden="true">*</span></span>
          <input autoComplete="name" name="name" required maxLength={120} placeholder="Your name" />
        </label>
        <label className="form-field">
          <span>Email <span aria-hidden="true">*</span></span>
          <input autoComplete="email" type="email" name="email" required maxLength={254} placeholder="you@company.com" />
        </label>
        <label className="form-field">
          <span>Company <span className="optional">(optional)</span></span>
          <input autoComplete="organization" name="company" maxLength={160} placeholder="Company name" />
        </label>
        <label className="form-field">
          <span>Project type</span>
          <select name="project_type" defaultValue="">
            <option value="">Select a service</option>
            <option>Website or web application</option>
            <option>Mobile application</option>
            <option>AI chatbot</option>
            <option>AI agent or automation</option>
            <option>Something else</option>
          </select>
        </label>
        <label className="form-field">
          <span>Budget range <span className="optional">(optional)</span></span>
          <select name="budget" defaultValue="">
            <option value="">Prefer not to say</option>
            <option>Under $2,500</option>
            <option>$2,500–$5,000</option>
            <option>$5,000–$10,000</option>
            <option>$10,000+</option>
            <option>Still defining the scope</option>
          </select>
        </label>
        <label className="form-field form-field-wide">
          <span>Tell us about your project <span aria-hidden="true">*</span></span>
          <textarea
            name="message"
            required
            minLength={20}
            maxLength={5000}
            rows={5}
            placeholder="What are you looking to build, and what would make it successful?"
          />
        </label>
      </div>
      <input type="hidden" name="_subject" value="New project inquiry — Innovate Software Solution" />
      <div className="form-submit-row">
        <button className="button button-primary" type="submit" disabled={state === "sending"}>
          {state === "sending" ? (
            <>Sending <LoaderCircle className="spin" size={17} aria-hidden="true" /></>
          ) : (
            <>Send project inquiry <ArrowUpRight size={17} aria-hidden="true" /></>
          )}
        </button>
        <p>We&apos;ll review your note and get back to you by email.</p>
      </div>
      <p className={`form-status form-status-${state}`} role="status" aria-live="polite">
        {state === "success" && "Thanks for getting in touch. Your inquiry has been sent."}
        {state === "error" && "We couldn't send your message just now. Please try again or email us directly."}
      </p>
    </form>
  );
}
