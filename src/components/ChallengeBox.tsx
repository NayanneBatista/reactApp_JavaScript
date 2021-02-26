import styles from '../styles/components/ChallengeBox.module.css'
import { challengesContext } from '../contexts/ChallengesContext';

export function ChallengeBox() {
    const contextData = useContext(ChallengesContext)

    const hasActiveChallenge = true;

    return(
        <div className={styles.challengeBoxContainer}>
            { hasActiveChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe 400 xp</header>

                    <main>
                        <img src="icons/body.svg" alt="Mão segurando halter com peso verde e azul"/>
                        <strong>Novo desafio</strong>
                        <p>Levante e faça uma caminhada de 3 minutos</p>
                    </main>

                    <footer>
                        <button
                            type="button"
                            className={styles.challengeSucceededButton}
                        >
                            Completei
                        </button>
                        <button
                            type="button"
                            className={styles.challengeFailedButton}
                        >
                            Falhei
                        </button>
                    </footer>
                </div>
            ) : ( 
                <div className={styles.challengeNotActive}>
                    <strong>Finalize um ciclo para receber um desafio</strong>
                    <p>
                    <img src="icons/level-up.svg" alt="level-up" />
                    Avance de nível completando desafios.
                    </p>
                </div>
            ) }
        </div>
    )
}