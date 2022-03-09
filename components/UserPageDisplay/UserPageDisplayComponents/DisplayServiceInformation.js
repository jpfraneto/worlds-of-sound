import styles from './DisplayServiceInformation.module.css';
import ServiceInformationList from './ServiceInformationList';

const DisplayServiceInformation = ({ sounds, service }) => {
  const setBackgroundColor = serv => {
    switch (serv) {
      case 'spotify':
        return '#1db954';
      case 'soundcloud':
        return '#fe5000';
      case 'youtube':
        return '#ff0000';
    }
  };
  return (
    <div
      className={styles.serviceDisplay}
      style={{ backgroundColor: setBackgroundColor(service) }}
    >
      <ServiceInformationList sounds={sounds} service={service} />
    </div>
  );
};

export default DisplayServiceInformation;
