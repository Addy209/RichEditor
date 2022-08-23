import Head from "next/head";
import Image from "next/image";
import Editor from "../Components/editor/editor";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Editor />
    </div>
  );
}
