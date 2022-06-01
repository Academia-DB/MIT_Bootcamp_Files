import {useRouter} from "next/router"
import styles from '../../styles/Home.module.css'

export default function Contact() {
    const router = useRouter()
    return (
        <>
            <h1>Privacy Policy Page</h1>
            <img src="/images/privacy-policy-template_1.jpg"/>
            <img src="/images/privacy-policy-template_2.jpg"/>
        </>
    )
}