module.exports = {
       
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  },
  
  env: {
    MONGO_URI: "mongodb+srv://new_user:kXPhbHVEhAeLuUZa@cluster1.rnmer.mongodb.net/notes?retryWrites=true&w=majority",
  },

  reactStrictMode: true,
};
