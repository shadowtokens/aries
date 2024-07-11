import ArcoWebpackPlugin from "@arco-plugins/webpack-react"


/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    env: (() => {
        // const STAGE = process.env.STAGE || "dev";
        return {
            // STAGE,
            // NEXT_PUBLIC_STAGE: STAGE,
            // NEXTAUTH_URL: process.env.NEXTAUTH_URL ?? process.env.VERCEL_URL ?? "",
        };
    })(),
    // sassOptions: {
    //     includePaths: ["./styles"],
    // },
    webpack: (config) => {
        config.resolve.fallback = {
            ...config.resolve.fallback,
            fs: false,
        };
        config.plugins.push(
            new ArcoWebpackPlugin({
                theme: "@arco-themes/react-skyknight",
                include: ["app", "components"],
                style: "css",
            }),
        );
        return config;
    },
    // async redirects() {
    //     return [
    //         {
    //             source: "/dashboard",
    //             destination: "/dashboard/simulator",
    //             permanent: false,
    //         },
    //     ];
    // },
};

export default nextConfig;
