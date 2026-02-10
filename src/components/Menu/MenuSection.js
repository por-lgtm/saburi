import styles from "./MenuSection.module.css";

export default function MenuSection({ title, items }) {
    if (items.length === 0) return null;

    return (
        <section className={styles.section} id={title}>
            <h3 className={styles.categoryTitle}>{title}</h3>
            <div className={styles.grid}>
                {items.map((item) => (
                    <div key={item.id} className={styles.card}>
                        <div className={styles.info}>
                            <h4 className={styles.itemName}>{item.name}</h4>
                            {item.description && (
                                <p className={styles.itemDesc}>{item.description}</p>
                            )}
                            {item.price && <p className={styles.itemPrice}>{item.price}</p>}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
