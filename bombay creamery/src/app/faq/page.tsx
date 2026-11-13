import type { Metadata } from "next";
import Link from "next/link";
import { faqs } from "@/lib/site";
export const metadata:Metadata={title:"Frequently Asked Questions",description:"Answers to common questions about Bombay Creamery products, dealership, distributorship, super stockist and applications."};
export default function FAQ(){return <><section className="page-hero"><div className="container"><div className="breadcrumb"><Link href="/">Home</Link> / FAQs</div><span className="eyebrow">HELPFUL INFORMATION</span><h1>Questions, answered with care.</h1><p>Quick guidance on product categories, business models and the application process.</p></div></section><section className="section"><div className="container"><div className="faq-list">{faqs.map(f=><details className="faq-item" key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>)}</div></div></section></>}
