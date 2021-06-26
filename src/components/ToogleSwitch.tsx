import { useTheme } from '../hooks/useTheme';
import '../styles/toggle-switch.scss';

export function ToogleSwitch() {
    const { theme, toogleTheme } = useTheme();

    return (
        <div className="theme-indicator">
            <label className="switch" >
                <input type="checkbox" onClick={toogleTheme} />
                <span className="slider round"></span>
            </label>
            <p className="theme-text">{theme}</p>
        </div>
    )
}
