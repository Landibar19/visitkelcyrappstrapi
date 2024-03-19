module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'nNTx4HA7gV2ecP2WF5ZT9g=='),
  },
  apiToken: {
<<<<<<< HEAD
    salt: env('API_TOKEN_SALT', '7WVUAKj60x4S8jNte+plmg=='),
=======
    salt: env('API_TOKEN_SALT', "q0BQu+8ARJOaw4m5CaOdwg=="),
>>>>>>> 4025954871faeec7520438c90864203025b334a5
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
