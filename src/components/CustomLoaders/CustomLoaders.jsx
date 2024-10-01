import PuffLoader from 'react-spinners/PuffLoader';
import {RotatingStyled} from "./CustomLoaders.styled";


export const RotatingLoader = () => {
    return (
        <RotatingStyled>
            <PuffLoader 
                size={160}
                color={"#E3FFA8"}
                loading = {true} 
                speedMultiplier={1}
                aria-label="Loading Spinner"
                data-testid="loader" 
            />
        </RotatingStyled>
    );
};





