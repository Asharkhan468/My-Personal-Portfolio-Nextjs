import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function BlogCTA() {
  return (
    <aside className="article-cta mt-8">
      <p className="eyebrow">Building something?</p>
      <h2>Make your next technology decision with clarity.</h2>
      <p>Tell us about your product, workflow, or technical challenge. We&apos;ll help you explore a sensible next step.</p>
      <Link className="button button-primary" href="/contact">
        Talk to our team <ArrowUpRight size={16} aria-hidden="true" />
      </Link>
    </aside>
  );
}
