import {useRouter} from "next/router"
import styles from '../../styles/Home.module.css'

export default function Contact() {
    const router = useRouter()
    return (
        <div>
            <h1>Contact Page</h1>
            <h2>Email: email@email.email</h2>
        </div>
    )
}