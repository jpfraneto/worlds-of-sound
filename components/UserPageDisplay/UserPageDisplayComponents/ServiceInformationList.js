import styles from './ServiceInformationList.module.css';
import ServiceInformationIndividualCard from './ServiceInformationIndividualCard';
import SpotifyInformationCard from './SpotifyInformationCard';

const ServiceInformationList = ({ sounds, service }) => {
  if (service === 'spotify') {
    return (
      <div className={styles.spotifyListContainer}>
        {sounds ? (
          sounds.map(sound => (
            <SpotifyInformationCard sound={sound} key={sound._id} />
          ))
        ) : (
          <h3>This user has not shared sounds from this provider yet</h3>
        )}
      </div>
    );
  }

  return (
    <div className={styles.listContainer}>
      {sounds ? (
        sounds.map(sound => (
          <ServiceInformationIndividualCard key={sound._id} sound={sound} />
        ))
      ) : (
        <h3>This user has not shared sounds from this provider yet</h3>
      )}
    </div>
  );
};

export default ServiceInformationList;
