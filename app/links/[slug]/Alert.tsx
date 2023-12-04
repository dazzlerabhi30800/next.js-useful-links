import styles from '@/app/page.module.css';
export default function Alert({ show }: { show: boolean }) {
    console.log(show);
    return (
        <div className={`${styles.alertContainer} ${show && styles.show}`}>
            <span className={styles.clipboardText}>
                Copied to clipboard
            </span>
            <span className={styles.gradientLine}></span>
        </div>
    )
}