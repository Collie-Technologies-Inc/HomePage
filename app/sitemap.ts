import type { MetadataRoute } from "next";
export default function sitemap():MetadataRoute.Sitemap{return ["","company","solutions","solutions/robot-caddie","solutions/mini-green","technology","achievements","news"].map(p=>({url:`https://collietech.co.kr/${p}`,lastModified:new Date()}))}
