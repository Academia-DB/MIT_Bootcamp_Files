module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8d2714ef67bcc2020672a01160766789'),
  },
});
