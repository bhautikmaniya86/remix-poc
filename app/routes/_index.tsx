import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { useState } from "react";
import { Button } from "~/components/ui/Button/Button";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [count, setCount] = useState(0);
  return (
    <Button variant="default" onClick={() => setCount(count + 1)}>
      Home {count}
    </Button>
  );
}
