import RenderCampsite from '../features/campsites/RenderCampsite';
import { useSelector } from 'react-redux';

const CampsiteInfoScreen = ({ route }) => {
    const { campsite } = route.params;
    return <RenderCampsite campsite={campsite} />;
};

export default CampsiteInfoScreen;
