export const getUserInfo = async () => {
  const response = await fetch('/user/info')

  if (!response.ok) {
    throw new Error('Failed to fetch user info')
  }

  return response.json()
}