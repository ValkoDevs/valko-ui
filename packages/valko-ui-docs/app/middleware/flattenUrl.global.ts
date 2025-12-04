export default defineNuxtRouteMiddleware((to) => {
  const match = to.path.match(/^\/docs\/[^/]+\/([^/]+)$/)
  if (!match) return

  const flatPath = `/docs/${match[1]}`
  if (to.path === flatPath) return

  return navigateTo(flatPath)
})
