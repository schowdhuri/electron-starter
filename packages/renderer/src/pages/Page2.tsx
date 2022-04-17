import type { FormEvent } from "react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "@src/Routes";

export function Page2() {
  const txtUserRef = useRef<HTMLInputElement>(null);
  const txtPasswdRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (!txtUserRef.current || !txtPasswdRef.current) {
      return;
    }

    window.electronStore
      .storeUserinfo({
        username: txtUserRef.current.value,
        password: txtPasswdRef.current.value,
      })
      .then((value) => {
        console.log({ value });
      });
  };

  useEffect(() => {
    if (txtUserRef.current) {
      window.electronStore.storeUserinfo().then((value) => {
        if (txtUserRef.current) {
          txtUserRef.current.value = value.username;
        }
      });
    }
  }, [txtUserRef.current]);

  return (
    <div>
      <h1>Page 2</h1>
      <form onSubmit={handleSubmit}>
        <input ref={txtUserRef} type="text" placeholder="username" />
        <br />
        <input ref={txtPasswdRef} type="password" placeholder="password" />
        <button type="submit">Let me in</button>
      </form>
      <Link to={ROUTES.Home}>Go Home</Link>
    </div>
  );
}
