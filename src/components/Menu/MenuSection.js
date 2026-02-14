import styles from "./MenuSection.module.css";

export default function MenuSection({ title, items, isSingleColumn }) {
    if (items.length === 0) return null;

    return (
        <section className={styles.section} id={title}>
            <h3 className={styles.categoryTitle}>{title}</h3>
            <div className={`${styles.grid} ${isSingleColumn ? styles.singleColumn : ''}`}>
                {items.map((item) => (
                    <div key={item.id} className={styles.card}>
                        <div className={styles.info}>
                            <div className={styles.headerRow}>
                                <h4 className={styles.itemName}>{item.name}</h4>
                                {item.price && <p className={styles.itemPrice}>{item.price}</p>}
                            </div>
                            {item.description && (
                                <p className={styles.itemDesc}>{item.description}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
