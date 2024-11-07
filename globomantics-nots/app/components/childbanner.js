import styles from "./banner.module.css"

const ChildBanner = ({children}) => {
    return(
        <header className="flex mb-4">
            <div className="col-span-5">
                <img src="/GloboLogo.png" alt="Global Logo" className={styles.logo}/>
            </div>
            <div className="col-span-7 mt-5" style={{fontStyle:'italic', color:'coral', fontSize:'x-large'}}>
                {children}
            </div>
        </header>

    );
};

export default ChildBanner;