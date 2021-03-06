declare module "sitemap" {
    export interface ISitemapUrl {
        url: string;

        changefreq?: "daily" | "weekly" | "monthly";

        /**
         * A decimal priority, between 1.0 and 0.
         */
        priority?: number;
    }

    export interface ISitemapOptions {
        /**
         * The hostname for all urls, e.g. https://example.com
         */
        hostname: string;

        /**
         * Cache purge period in seconds.
         */
        cacheTime?: number;

        urls: ISitemapUrl[];
    }

    export interface ISitemap {
        toXML: (err: Error, xml: string) => void;

        toString: () => string;

        add: (url: ISitemapUrl) => void;

        del: (url: ISitemapUrl) => void;
    }

    export function createSitemap(options: ISitemapOptions): ISitemap;
}