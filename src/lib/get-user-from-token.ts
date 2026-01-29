export function getUserFromToken(req: Request) {
	const auth = req.headers.get('authorization')

	if (!auth) return null

	const token = auth.replace('Bearer ', '')

	try {
		const decoded = JSON.parse(atob(token))
		return { id: decoded.userId }
	} catch {
		return null
	}
}
