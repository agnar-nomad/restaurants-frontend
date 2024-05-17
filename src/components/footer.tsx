import { ModeToggle } from "./dark-mode-toggle.js";
import SignInWithNickname from "./sign-in-with-nickname.js";

export default function Footer() {
  return (
    <footer className="flex justify-between flex-wrap p-4">
        <div>
            Built by Agnar using 
            {' '}
            <a href="https://waku.gg/" target="_blank" rel="noreferrer" className="underline underline-offset-2">Waku</a>
        </div>
        <ModeToggle />
        <SignInWithNickname/>

    </footer>
  );
};
