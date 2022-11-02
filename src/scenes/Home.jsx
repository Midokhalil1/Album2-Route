import Header from "../components/Header"
import AlbumList from "../components/AlbumList"
import { Link } from 'react-router-dom'
export default function Home() {
    return (
        <>
            <Header title={'Best-Selling Album '} />
            <Link to='/albums/new'>add Album</Link>
            <AlbumList />
        </>
    )
}