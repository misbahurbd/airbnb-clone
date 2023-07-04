import getCurrentUser from '@/actions/getCurrentUser'
import getListingById from '@/actions/getListingById'
import EmptyState from '@/components/EmptyState'
import ListingClient from '@/app/listings/[listingId]/ListingClient'
import getReservations from '@/actions/getReservations'

interface IParams {
  listingId?: string
}

const ListingPage = async ({ params }: { params: IParams }) => {
  const listing = await getListingById(params)
  const reservation = await getReservations(params)
  const currentUser = await getCurrentUser()

  if (!listing) {
    return <EmptyState />
  }

  return (
    <ListingClient
      listing={listing}
      reservations={reservation}
      currentUser={currentUser}
    />
  )
}

export default ListingPage
