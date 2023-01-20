import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Link from "next/link";
import { AppProps } from "next/app";
import { Box } from "@mui/system";

export default function ControleCertificados({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Box width="100%" height="100%" padding="0" margin="0">
  <Component {...pageProps} />
  </Box>
  );
}



