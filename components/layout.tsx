import Link from "next/link";

import styles from "styles/layout.module.css";

const { layout, header, nav, anchor, content } = styles;

export const Layout = (props: { children: JSX.Element }) => {
  const { children } = props;

  return (
    <div className={layout}>
      <header className={header}>
        <nav className={nav}>
          <Link href={"/"}>
            <a className={anchor}> Home </a>
          </Link>
          <Link href={"/products"}>
            <a className={anchor}> Products </a>
          </Link>
        </nav>
      </header>
      <div className={content}>{children}</div>
    </div>
  );
};
