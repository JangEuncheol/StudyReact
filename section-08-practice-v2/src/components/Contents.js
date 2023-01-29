import React from "react";

import styles from "./Contents.module.css";
import Box from "./UI/Box"

const Contents = () => {
    return <div className={styles.contents}>
        <section>
            <Box></Box>
        </section>
        <section>
            <Box></Box>
        </section>
    </div>
};

export default Contents;