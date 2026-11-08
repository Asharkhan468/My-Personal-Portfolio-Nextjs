import Link from "next/link";

export default function BrandMark() {
  return (
    <Link href="/" className="brand" aria-label="Innovate Software Solution home">
      <span className="brand-symbol" aria-hidden="true">
        <span />
        <span />
        <span />
      </span>
      <span className="brand-name">
        Innovate
        <span>Software Solution</span>
      </span>
    </Link>
  );
}
