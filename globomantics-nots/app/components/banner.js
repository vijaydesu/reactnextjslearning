import styles from "./banner.module.css"

const Banner = ({headerText, bannerLogo}) => {
    return(
        <header className="flex mb-4">
            <div className="col-span-5">
                <img src={bannerLogo} alt="Global Logo" className={styles.logo}/>
            </div>
            <div className="col-span-7 mt-5" style={{fontStyle:'italic', color:'coral', fontSize:'x-large'}}>
                {headerText}
            </div>
        </header>

    );
};

export default Banner;