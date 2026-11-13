import Link from "next/link";
import { opportunities, site } from "@/lib/site";

export default function Footer() {
  return <footer className="footer">
    <div className="container footer-grid">
      <div><Link href="/" className="brand brand-light"><span className="brand-mark">BC</span><span><b>BOMBAY CREAMERY</b><small>THE ART OF FROZEN DELIGHT</small></span></Link><p className="footer-copy">A considered collection of frozen desserts, dairy beverages and business enquiry pathways.</p></div>
      <div><h4>Explore</h4><Link href="/about">Our Story</Link><Link href="/products">Product Collection</Link><Link href="/application-process">Application Process</Link><Link href="/faq">Frequently Asked Questions</Link></div>
      <div><h4>Business</h4>{opportunities.map(o=><Link key={o.slug} href={`/business/${o.slug}`}>{o.title}</Link>)}</div>
      <div><h4>Get in touch</h4><a href={`tel:${site.phone}`}>{site.formattedPhone}</a><a href={`mailto:${site.email}`}>{site.email}</a><p>{site.address}</p></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} Bombay Creamery. All rights reserved.</span><span>Business details are indicative and subject to written confirmation.</span></div>
  </footer>;
}
