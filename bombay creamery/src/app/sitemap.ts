import type { MetadataRoute } from "next";
import { site, opportunities } from "@/lib/site";
export default function sitemap():MetadataRoute.Sitemap{
 const routes=["","/about","/products","/business-opportunities","/application-process","/faq","/contact",...opportunities.map(o=>`/business/${o.slug}`)];
 return routes.map(route=>({url:`${site.url}${route}`,lastModified:new Date(),changeFrequency:route===""?"weekly":"monthly",priority:route===""?1:0.7}));
}
