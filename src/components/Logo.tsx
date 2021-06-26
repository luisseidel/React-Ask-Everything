import logoDark from '../assets/images/logo.svg';
import logoWhite from '../assets/images/logo-white.svg';
import { useTheme } from '../hooks/useTheme';

export function Logo() {
    const { theme, toogleTheme } = useTheme();
    return (
            (theme === 'light') 
            ?
            <a href="/">
                <img src={logoDark} alt="Letmeask" />
            </a>
            :
            <a href="/">
                <img src={logoWhite} alt="Letmeask" />
            </a>
    )
}
