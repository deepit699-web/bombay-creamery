import Link from "next/link";
import { navItems, site } from "@/lib/site";

export default function Header() {
  return <header className="site-header">
    <div className="topline"><div className="container topline-inner"><span>Frozen moments. Thoughtfully made.</span><span><a href={`mailto:${site.email}`}>{site.email}</a><i> · </i><a href={`tel:${site.phone}`}>{site.formattedPhone}</a></span></div></div>
    <div className="container nav-wrap">
      <Link href="/" className="brand" aria-label="Bombay Creamery home"><span className="brand-mark">BC</span><span><b>BOMBAY CREAMERY</b><small>THE ART OF FROZEN DELIGHT</small></span></Link>
      <nav aria-label="Main navigation">{navItems.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav>
      <Link className="button button-small" href="/contact">Make an Enquiry <span>↗</span></Link>
    </div>
  </header>;
}
