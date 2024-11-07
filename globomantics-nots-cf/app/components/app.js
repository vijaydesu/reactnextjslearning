//const { default: Banner } = require("./banner");
import Banner from "./banner";
import ChildBanner from "./childbanner";
import HouseList from "./houseList";

const App = () => {
    return(
        <>
        <Banner headerText="Welcome to Pros. You can use it using Props or deconstructed mode using headerText" bannerLogo="/GloboLogo.png"/>
       {/*  <ChildBanner>
            <div>
                Welcome to child Banner. New way to Passprops as JSX tags.
            </div>
        </ChildBanner> */}

        <HouseList />
        </>
    );
}

export default App;