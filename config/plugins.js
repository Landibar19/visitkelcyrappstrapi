module.exports = ({ env }) => ({

  'users-permissions': {
    jwtSecret: env('JWT_SECRET', 'OCYVIBfeYoMGgHcuRez6iQ=='),
  },
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
          folder: 'Visitkelcyra',
          secure: true,
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
    // ...
  });