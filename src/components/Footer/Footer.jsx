import styles from './Footer.module.css'

function Footer() {
	const date = new Date().getFullYear()
	return <footer className={styles.footer}>PE3News &copy; {date}</footer>
}

export default Footer
