'use client';

import styles from './_style/page.module.scss'
import {Button} from "@arco-design/web-react";
import {KLine} from "@/app/market/_component/KLine";

const MarketPage = () => {
    return <div className={styles.container}>Hello world

        <KLine/>

        <Button type={'primary'}>Submit</Button>
    </div>
}

export default MarketPage