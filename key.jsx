AIzaSyCYuT8zwI4H7xdx0Yt4ig2-LaH_PhdDX7c

  value={searchTerm}
           onChange={(e) => setSearchTerm(e.target.value)}


           const BooksProvider = ({ children }) => {
            const [books, setBooks] = useState([])
            const [loading, setLoading] = useState(false)
            const [error, setError] = useState(null)
          
            const searchBooks = async (searchTerm) => {
              setLoading(true)
              try {
                const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=css&key=AIzaSyCYuT8zwI4H7xdx0Yt4ig2-LaH_PhdDX7c`)
                setBooks(response.data.items)
              } catch (error) {
                setError(error)
              }
              setLoading(false)
            }