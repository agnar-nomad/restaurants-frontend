import { ModeToggle } from "./DarkModeToggle.js";

export default function Footer() {
  return (
    <footer className="p-4 flex justify-evenly">
      <div>
        Visit{' '}
        <a href="https://waku.gg/" target="_blank" rel="noreferrer">
          waku.gg
        </a>{' '}
        to learn more
      </div>
      <ModeToggle />

    </footer>
  );
};
