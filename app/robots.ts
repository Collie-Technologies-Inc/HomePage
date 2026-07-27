import type { MetadataRoute } from "next";
export default function robots():MetadataRoute.Robots{return {rules:{userAgent:"*",allow:"/"},sitemap:"https://collietech.co.kr/sitemap.xml"}}
