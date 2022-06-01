import {useRouter} from "next/router"
import styles from '../../styles/Home.module.css'

export default function Restaurant() {
    const router = useRouter()
    return (
        <h1>Dynamic Restaurant Page {router.query.restaurant}</h1>
    )
}