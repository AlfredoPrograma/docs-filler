import { fileURLToPath } from "node:url"
import createJiti from "jiti"

// Validates `env` schema in build time
const jiti = createJiti(fileURLToPath(import.meta.url))
jiti("./core/env.ts")

/** @type {import('next').NextConfig} */
const nextConfig = {}

export default nextConfig
