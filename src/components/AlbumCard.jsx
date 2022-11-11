import { Link } from 'react-router-dom'

export default function AlbumCard({ thisAlbum, setAlbums }) {
    function deleteOne() {
        fetch(`${process.env.REACT_APP_ENDPOINT}/albums/${thisAlbum.albumId}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },

        })
            .then((data) => {
                fetch(process.env.REACT_APP_ENDPOINT + '/albums')
                    .then(response => response.json())
                    .then(setAlbums)
                    .catch(alert)
                console.log(data)
            })
            .catch(alert)
    }






    return (
        <div className="album-card">
            <Link to={`album/${thisAlbum.albumId}`}>
                <h3 className="album-title">{thisAlbum.album}</h3>
                <p>{thisAlbum.artist}, {thisAlbum.year}</p>
            </Link>
            <button onClick={deleteOne}>Delete</button>
        </div>
    )
}  
