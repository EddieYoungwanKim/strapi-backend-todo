module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1e1461a0e9608bb4256522b582cc1cac'),
  },
});
