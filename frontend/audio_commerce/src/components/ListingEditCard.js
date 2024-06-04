import { useState, useEffect, useContext } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import UserContext from './UserContext';
import UserListingsUpdate from './UserListingsUpdate';
import { useNavigate } from 'react-router-dom';


function ListingEditCard() {
  const [listings, setListings] = useState([]);
  const { user } = useContext(UserContext); // Get the user from the context
  const navigate = useNavigate();



  useEffect(() => {
    console.log(user)
    if (user) {

        console.log('fetching listings for user: ', user.name); 

      fetchUserListings(user.name);
    }
  }, [user]);

  const fetchUserListings = async (username) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/products/user/${username}`);
      console.log('Fetched listings:', response.data); // Debugging line
      setListings(response.data);
    } catch (error) {
      console.error('Error fetching user listings:', error);
    }
  };

  const handleEdit = (listing) => {
    // Still to figure this little section out
    console.log('Edit listing:', listing);
    navigate(`/edit/${listing._id}`); // Redirect to edit Page
  };

  const handleDelete = async (listingId) => {
    console.log(listingId)
    try {
      await axios.delete(`http://localhost:5000/api/products/${listingId}`);
      setListings(listings.filter(listing => listing._id !== listingId));
    } catch (error) {
      console.error('Error deleting listing:', error);
    }
  };

  return (
    <Container>
      {listings.length === 0 && <p>No Listings Found.</p>} {/*Message when no listing is found*/}
      {listings.map(listing => (
        <UserListingsUpdate
          key={listing._id}
          listing={listing}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}
    </Container>
  );
}

export default ListingEditCard;
