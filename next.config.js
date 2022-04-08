/** @type {import('next').NextConfig} */
const nextConfig = {
       reactStrictMode: true,
       env: {
              MONGO_URI: "mongodb://localhost:27017/anonMsgDB",
              REACT_APP_WEBSITE_URL: "http://localhost:3000"
       }
}

module.exports = nextConfig
