import {useEffect} from "react";
// import AutoRedirect from "../components/AutoRedirect.tsx";
import AutoRedirectAdvanced from "../components/AutoRedirectAdvanced.tsx";

const AutoRedirectPage = () => {

    useEffect(() => {
        document.title = "CF Auto Redirect Example";
    }, [])
    return (
        <>
            {/*<AutoRedirect />*/}
            <AutoRedirectAdvanced />
        </>
    )
};
export default AutoRedirectPage;