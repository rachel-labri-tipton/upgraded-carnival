import { log } from '../log.js';
import plusIcon from '../assets/plus-icon.png';

export default function Header() {
  log('<Header /> rendered', 1);
  return (
    <header id="main-header">
      <img src={plusIcon} alt="plus icon" />
      <h1>React - Behind The Scenes</h1>
    </header>
  );
}
