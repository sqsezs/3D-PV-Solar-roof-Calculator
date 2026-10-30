import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <iframe
      src="/plant.html"
      title="PV Roof Powerplant"
      className="plant-frame"
    />
  );
}
