import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

const Friend = () => {
    const gifft = useContext(AssetContext);
    return (
        <div>
            <h2>Friend</h2>
            <p>has: {gifft}</p>
        </div>
    );
};

export default Friend;