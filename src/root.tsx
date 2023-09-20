// @refresh reload
import { Suspense, createEffect, createMemo, createSignal } from "solid-js";
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";
import Navbar from "./components/Layouts/Navbar";

const defaultTheme = () => {
  if (typeof localStorage === "undefined") {
    return "acid";
  }
  return localStorage.getItem("data-theme") ?? "acid";
};

export const [theme, setTheme] = createSignal<string>(defaultTheme());

export const updateTheme = (name: string) => {
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("data-theme", name);
    setTheme(name);
  }
};

export default function Root() {
  return (
    <Html lang="en" data-theme={theme()}>
      <Head>
        <Title>Rithy THUL</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <Navbar />
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
