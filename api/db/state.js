module.exports = {
  ADMIN: {
    LOGIN: 'admin',
    // password -> 1234
    PASSWORD: '$2a$12$2YR95ti1vaanzFyT4rSPKeeiBKM3irv0pgnhmmDB5wItbZUEbUJMS'
  },
  USERS: Array.from({ length: 10 }, (_, id) => ({
    id: id + 1,
    image: '/images/user.jpg',
    name: 'leanne graham',
    email: 'sincere@april.biz',
    phone: '1-770-736-8031',
    address: {
      city: 'gwenborough',
      street: 'kulas light'
    },
    website: 'hildegard.org'
  }))
}
