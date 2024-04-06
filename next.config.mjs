/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: "/",
          destination: "/dashboard/table",
          permanent: true,
        },
      ];
    },
  };
  
  export default nextConfig;