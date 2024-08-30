import "./MainPage.css"
import MainComponent from "../Components/MainComponent/MainComponent";
import JoinUsComponent from "../Components/JoinUsComponent/JoinUsComponent";
import RegressiveCount from "../Components/RegressiveCount/RegressiveCount";
import QuickMessageComponent from "../Components/QuickMessageComponent/QuickMessageComponent";
import ItineraryComponent from "../Components/Itinerary/ItineraryComponent";
import PlacesComponent from "../Components/PlacesComponent/PlacesComponent";
import DropDownFamiliesComponent from "../Components/DropDownFamiliesComponent/DropDownFamiliesComponent";
import ConfirmAssistanceComponent from "../Components/ConfirmAssitanceComponent/ConfirmAssistanceComponent";
import EnvelopeComponent from "../Components/EnvelopeComponent/EnvelopeComponent";
import GalleryComponent from "../Components/GalleryComponent/GalleryComponent";
import InformationComponent from "../Components/InformationComponent/InformationComponent";
import GoodWishesComponent from "../Components/GoodWhishes/GoodWishes";

const MainPage = () => {
    document.body.style.overflowX = 'hidden';
    document.body.style.overflowY = 'hidden';
    document.body.style.overflow = 'hidden';

    return (
        <div className="wide-element">
            <EnvelopeComponent />
            <MainComponent />
            <JoinUsComponent />
            <GoodWishesComponent />
            <RegressiveCount />
            <QuickMessageComponent {...{ message: "Contar con su presencia nos llenaría de alegría!", color: "#5A775E" }} />
            <ItineraryComponent />
            <PlacesComponent />
            <DropDownFamiliesComponent />
            <ConfirmAssistanceComponent />
            <GalleryComponent />
            <InformationComponent />
        </div>
    )
}

export default MainPage;
