// @ts-check
import { defineConfig } from 'astro/config';

const site = process.env.SITE_URL ?? "https://cmlab-korea.github.io";
const base = process.env.SITE_BASE ?? "/Chameleon/";

// https://astro.build/config
export default defineConfig({
    site,
    base,
});
