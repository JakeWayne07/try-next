import styles from '../styles/Layouts.module.css'
import Nav from './Nav'

const Layout = ({children}) => {
    return (
        <>
            <Nav/>
            <div className={styles.container}>
                <main className={styles.main}>
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout
