module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '78147a4b3c7b8c4ad7cf0d6f28850f17'),
  },
});
