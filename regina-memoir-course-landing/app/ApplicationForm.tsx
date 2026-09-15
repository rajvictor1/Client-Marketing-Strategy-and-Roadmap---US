"use client";

import { useState } from "react";

export default function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    goal: "",
    commitment: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-10 text-center md:p-14">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--accent-gold)]/15 text-2xl text-[var(--accent-gold)]">✓</div>
        <h3 className="mb-3 font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[var(--text-primary)] md:text-3xl">Application received</h3>
        <p className="mb-6 text-[var(--text-muted)]">
          Thank you, {formData.name}. We review every application personally and will reply within 48 hours.
        </p>
        <p className="text-sm text-[var(--text-muted)]">Questions? Email regina@serendipitylit.com</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-[var(--text-primary)]">Full name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-none transition focus:border-[var(--accent-gold)] focus:ring-2 focus:ring-[var(--accent-gold)]/20"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-[var(--text-primary)]">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-none transition focus:border-[var(--accent-gold)] focus:ring-2 focus:ring-[var(--accent-gold)]/20"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="mb-2 block text-sm font-medium text-[var(--text-primary)]">Phone (optional)</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-none transition focus:border-[var(--accent-gold)] focus:ring-2 focus:ring-[var(--accent-gold)]/20"
          placeholder="+1 (555) 000-0000"
        />
      </div>

      <div>
        <label htmlFor="experience" className="mb-2 block text-sm font-medium text-[var(--text-primary)]">Where are you with your memoir?</label>
        <select
          id="experience"
          name="experience"
          required
          value={formData.experience}
          onChange={handleChange}
          className="w-full rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] px-4 py-3 text-[var(--text-primary)] outline-none transition focus:border-[var(--accent-gold)] focus:ring-2 focus:ring-[var(--accent-gold)]/20"
        >
          <option value="">Select one...</option>
          <option value="idea">I have an idea but haven't started</option>
          <option value="started">I have started writing</option>
          <option value="draft">I have a partial or full draft</option>
          <option value="proposal">I am preparing a proposal</option>
        </select>
      </div>

      <div>
        <label htmlFor="goal" className="mb-2 block text-sm font-medium text-[var(--text-primary)]">What do you want from this cohort?</label>
        <textarea
          id="goal"
          name="goal"
          required
          rows={5}
          value={formData.goal}
          onChange={handleChange}
          className="w-full rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-none transition focus:border-[var(--accent-gold)] focus:ring-2 focus:ring-[var(--accent-gold)]/20"
          placeholder="Tell us about your story and what you want to achieve in six weeks..."
        />
      </div>

      <div>
        <label htmlFor="commitment" className="mb-2 block text-sm font-medium text-[var(--text-primary)]">Can you commit 4–6 hours per week for six weeks?</label>
        <select
          id="commitment"
          name="commitment"
          required
          value={formData.commitment}
          onChange={handleChange}
          className="w-full rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] px-4 py-3 text-[var(--text-primary)] outline-none transition focus:border-[var(--accent-gold)] focus:ring-2 focus:ring-[var(--accent-gold)]/20"
        >
          <option value="">Select one...</option>
          <option value="yes">Yes, I can commit the time</option>
          <option value="mostly">Most weeks, yes</option>
          <option value="unsure">I am not sure yet</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-gradient-to-r from-[var(--accent-gold)] to-[var(--accent-gold-bright)] px-8 py-4 text-base font-semibold text-[var(--ink)] shadow-lg shadow-amber-500/20 transition hover:-translate-y-0.5 hover:shadow-xl md:text-lg"
      >
        Submit Application
      </button>

      <p className="text-center text-xs text-[var(--text-muted)]">
        This is a founding cohort application. We review every submission personally.
      </p>
    </form>
  );
}
