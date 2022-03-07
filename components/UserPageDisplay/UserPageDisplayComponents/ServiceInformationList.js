import styles from './ServiceInformationList.module.css';
import ServiceInformationIndividualCard from './ServiceInformationIndividualCard';
import SpotifyInformationCard from './SpotifyInformationCard';

const ServiceInformationList = ({ service }) => {
  if (service === 'spotify') {
    return (
      <div className={styles.spotifyListContainer}>
        <SpotifyInformationCard />
        <SpotifyInformationCard />
        <SpotifyInformationCard />
      </div>
    );
  }

  return (
    <div className={styles.listContainer}>
      <ServiceInformationIndividualCard />
      <ServiceInformationIndividualCard />
      <ServiceInformationIndividualCard />
    </div>
  );
};

export default ServiceInformationList;
