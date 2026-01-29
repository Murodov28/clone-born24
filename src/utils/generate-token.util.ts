export function generateAccessToken(userId: number) {
	return btoa(JSON.stringify({ userId, exp: Date.now() + 1000 * 60 * 60 * 24 }))
}
