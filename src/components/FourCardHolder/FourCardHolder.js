import React from 'react';
import Card from '../Card/Card';
import styles from './FourCardHolder.module.css';

import data_svg from '../../assets/undraw_data.svg';
import team from "../../assets/undraw_team_spirit_hrr4.svg";
import supervisor from "../../assets/undraw_location_search_bqps.svg";
import idea from "../../assets/undraw_new_ideas_jdea.svg";

const FourCardHolder = () => {
    return (
        <div className={styles.container}>
            <div className={styles.endHolder}>
                <Card 
                    title={"Supervisor"}
                    body={"Monitors activity to identify project roadblocks"}
                    topColor={"#76d1d4"}
                    icon={supervisor}
                />
            </div>
            <div className={styles.middleHolder}>
                <Card 
                    title={"Team Builder"}
                    body={"Scans our talent network to create an optimal team for your project"}
                    topColor={"#e6575a"}
                    icon={team}
                />
                <Card
                    title={"Karma"}
                    body={"Regularly evaluates our talent to ensure quality"}
                    topColor={"#e8a741"}
                    icon={idea}
                />
            </div>
            <div className={styles.endHolder}>
                <Card 
                    title={"Calculator"}
                    body={"Uses data from past projects to provide better delivery estimations"}
                    topColor={"#7ba6d5"}
                    icon={data_svg}
                />
            </div>
            
        </div>
    )   
}

export default FourCardHolder;