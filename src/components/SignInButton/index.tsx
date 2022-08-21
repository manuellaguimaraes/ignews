import { FaGithub } from 'react-icons/fa'; //font awesome
import { FiX } from 'react-icons/fi'; //feather icons
import styles from './styles.module.scss';

export function SignInButton() {
  const isUserLoggedIn = true;
  const userName = "Manuella Guimarães";

  return isUserLoggedIn ? (
    <button
      type="button"
      className={styles.signInButton}
    >
      <FaGithub color="#04D361" />
      {userName}
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button
      type="button"
      className={styles.signInButton}
    >
      <FaGithub color="var(--yellow-500)" />
      Sign in with GitHub
    </button>
  )
}