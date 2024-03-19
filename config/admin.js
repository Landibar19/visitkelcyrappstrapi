module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'nNTx4HA7gV2ecP2WF5ZT9g=='),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', "q0BQu+8ARJOaw4m5CaOdwg=="),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', "y7lqL3k9kR181s+AY9XpfA=="),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
