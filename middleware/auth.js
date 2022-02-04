export default async function ({ store, redirect, route }) {
  await store.dispatch('Auth/check')

  const user = store.getters['Auth/auth']

  if (!user && !/login\/?$/.test(route.path)) {
    return redirect('/login')
  }

  if (user && /login\/?$/.test(route.path)) {
    return redirect('/users')
  }
}
