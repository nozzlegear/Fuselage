import * as Bluebird from "bluebird";
import { Client, CachePolicy, CachedItem, CacheClient } from "catbox";

export const DefaultTTL = 12 * 60 * 60 * 1000; //12 hours in milliseconds

export type SegmentNames = "posts";

let CLIENT: CacheClient;

/**
 * Registers server caches.
 */
export default async function registerCaches() {
    const client = new Client(require("catbox-memory"), {});

    client.start(async (error) => {
        if (error) {
            console.error("Error starting cache client", error);

            throw error;
        }

        CLIENT = client;
    })
}

/**
 * A promised function for getting a value from a catbox cache. Returns undefined if the value is not found.
 */
export function getCacheValue<T>(segmentName: SegmentNames, key: string) {
    return new Promise<CachedItem<T>>((resolve, reject) => {
        CLIENT.get<T>({ id: key.toLowerCase(), segment: segmentName }, (error, value) => {
            if (error) {
                reject(error);
            }

            return resolve(value);
        })
    })
}

/**
 * A promised function for setting a value in a catbox cache.
 */
export function setCacheValue<T>(segmentName: SegmentNames, key: string, value: T, ttl: number = DefaultTTL) {
    return new Promise<void>((resolve, reject) => {
        CLIENT.set({ id: key.toLowerCase(), segment: segmentName }, value, ttl, (error) => {
            if (error) {
                return reject(error);
            }

            return resolve(undefined);
        })
    })
}

/**
 * A promised function for deleting a value in a catbox cache.
 */
export function deleteCacheValue<T>(segmentName: SegmentNames, key: string) {
    return new Promise<void>((resolve, reject) => {
        CLIENT.drop({ id: key.toLowerCase(), segment: segmentName }, (error) => {
            if (error) {
                return reject(error);
            }

            return resolve(undefined);
        });
    })
}