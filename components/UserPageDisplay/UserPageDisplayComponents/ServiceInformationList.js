import styles from './ServiceInformationList.module.css';
import ServiceInformationIndividualCard from './ServiceInformationIndividualCard';
import SpotifyInformationCard from './SpotifyInformationCard';

const ServiceInformationList = ({ sounds, service }) => {
  if (service === 'spotify') {
    return (
      <div className={styles.spotifyListContainer}>
        {sounds ? (
          sounds.map(sound => <SpotifyInformationCard sound={sound} />)
        ) : (
          <h3>This user hasn't shared sounds from this provider yet</h3>
        )}
      </div>
    );
  }

  return (
    <div className={styles.listContainer}>
      {sounds.map(sound => (
        <ServiceInformationIndividualCard sound={sound} />
      ))}
    </div>
  );
};

export default ServiceInformationList;
