/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Force Next.js à générer un build statique propre pour Vercel
  images: {
    unoptimized: true, // Évite les erreurs d'optimisation d'images sur les builds statiques
  },
};

export default nextConfig;
