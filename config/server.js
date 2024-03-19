module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['landi1', 'landi2']),
<<<<<<< HEAD
=======
    session: {
      secret: env('SESSION_SECRET'),
      keys: ['Landi1', 'Landi2'], 
    },
>>>>>>> 4025954871faeec7520438c90864203025b334a5
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  session: {
    secret: env('SESSION_SECRET'),
    keys: ['Landi1', 'Landi2'], 
  },
});
