import {
  ArrowUpRight,
  Bot,
  Braces,
  Check,
  Code2,
  Globe2,
  Smartphone,
  Workflow,
} from "lucide-react";

function ConnectionMap() {
  return (
    <svg
      className="ecosystem-connections"
      viewBox="0 0 640 560"
      fill="none"
      aria-hidden="true"
    >
      <circle className="connection-orbit connection-orbit-outer" cx="320" cy="280" r="205" />
      <circle className="connection-orbit connection-orbit-inner" cx="320" cy="280" r="143" />
      <path className="connection-path" d="M320 280C267 238 218 188 144 128" />
      <path className="connection-path connection-path-two" d="M320 280C384 226 436 177 513 137" />
      <path className="connection-path connection-path-three" d="M320 280C255 331 201 377 129 433" />
      <path className="connection-path connection-path-four" d="M320 280C387 337 438 391 514 427" />
      <circle className="connection-node" cx="144" cy="128" r="4" />
      <circle className="connection-node" cx="513" cy="137" r="4" />
      <circle className="connection-node" cx="129" cy="433" r="4" />
      <circle className="connection-node" cx="514" cy="427" r="4" />
    </svg>
  );
}

function WebProductCard() {
  return (
    <div className="ecosystem-card ecosystem-card-web">
      <div className="ecosystem-card-heading">
        <span className="ecosystem-card-icon"><Globe2 size={15} /></span>
        <span>WEB EXPERIENCE</span>
        <span className="ecosystem-card-state" />
      </div>
      <div className="web-product-preview">
        <div className="web-preview-nav">
          <span className="web-preview-brand" />
          <span /><span /><span />
          <i />
        </div>
        <div className="web-preview-content">
          <span className="web-preview-label">PRODUCT / 01</span>
          <span className="web-preview-title" />
          <span className="web-preview-copy" />
          <span className="web-preview-copy web-preview-copy-short" />
          <div className="web-preview-actions"><i /><i /></div>
        </div>
        <div className="web-preview-aside"><Code2 size={15} /></div>
      </div>
    </div>
  );
}

function MobileProductCard() {
  return (
    <div className="ecosystem-card ecosystem-card-mobile">
      <div className="ecosystem-card-heading">
        <span className="ecosystem-card-icon ecosystem-card-icon-violet"><Smartphone size={14} /></span>
        <span>MOBILE PRODUCT</span>
      </div>
      <div className="phone-preview">
        <div className="phone-preview-camera" />
        <div className="phone-preview-greeting"><span /><i /></div>
        <div className="phone-preview-feature"><span><Workflow size={13} /></span><i /><b /></div>
        <div className="phone-preview-list"><i /><i /><i /></div>
        <div className="phone-preview-nav"><i /><i /><i /></div>
      </div>
      <span className="mobile-card-label">Designed for the way people work.</span>
    </div>
  );
}

function AutomationProductCard() {
  return (
    <div className="ecosystem-card ecosystem-card-automation">
      <div className="ecosystem-card-heading">
        <span className="ecosystem-card-icon"><Workflow size={15} /></span>
        <span>INTELLIGENT WORKFLOW</span>
        <span className="workflow-live"><i /> LIVE</span>
      </div>
      <div className="workflow-preview">
        <div className="workflow-step"><span><Braces size={13} /></span><i /></div>
        <div className="workflow-connector"><i /></div>
        <div className="workflow-step workflow-step-ai"><span><Bot size={14} /></span><i /></div>
        <div className="workflow-connector"><i /></div>
        <div className="workflow-step workflow-step-done"><span><Check size={13} /></span><i /></div>
      </div>
      <span className="workflow-caption">Connected. Considered. In control.</span>
    </div>
  );
}

function IntelligenceCore() {
  return (
    <div className="intelligence-core">
      <span className="core-orbit core-orbit-one" />
      <span className="core-orbit core-orbit-two" />
      <span className="core-signal core-signal-one" />
      <span className="core-signal core-signal-two" />
      <div className="core-disc">
        <span className="core-icon"><Bot size={28} strokeWidth={1.45} /></span>
        <span className="core-name">INTELLIGENCE</span>
        <span className="core-status"><i /> SYSTEMS THINKING</span>
      </div>
      <span className="core-spark core-spark-one" />
      <span className="core-spark core-spark-two" />
    </div>
  );
}

export default function HeroVisual() {
  return (
    <div
      className="hero-visual"
      role="img"
      aria-label="Illustration of an AI intelligence core connecting web, mobile, and automated products"
    >
      <div className="ecosystem-label">
        <span>INNOVATE / SYSTEMS STUDIO</span>
        <span><i /> CONNECTED INTELLIGENCE</span>
      </div>
      <div className="ecosystem-stage">
        <ConnectionMap />
        <WebProductCard />
        <MobileProductCard />
        <AutomationProductCard />
        <IntelligenceCore />
        <div className="ecosystem-footnote">
          <span className="footnote-icon"><ArrowUpRight size={14} /></span>
          <span>One connected product ecosystem</span>
        </div>
      </div>
    </div>
  );
}
