import prisma from '@/libs/prismadb'
import getCurrentUser from './getCurrentUser'

export default async function getFavoriteListings() {
  try {
    const currentUser = await getCurrentUser()
    if (!currentUser) {
      return []
    }

    const listings = await prisma.listing.findMany({
      where: {
        id: {
          in: [...(currentUser.favoriteIds || [])],
        },
      },
    })

    const SafeListings = listings.map((favorite) => ({
      ...favorite,
      createdAt: favorite.createdAt.toISOString(),
    }))

    return SafeListings
  } catch (error: any) {
    throw new Error(error)
  }
}
