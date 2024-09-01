import { createQuery } from "@tanstack/solid-query";
import ETDSMainWrapper from "~/components/base-components/ETDSMainWrapper";
import ETDSToggleButton from "~/components/ETDSToggleButton";

export default function About() {
  const repositoryQuery = createQuery(() => ({
    queryKey: ["TanStack Query"],
    queryFn: async () => {
      const result = await fetch("https://api.github.com/repos/TanStack/query");
      if (!result.ok) throw new Error("Failed to fetch data");
      return result.json();
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    throwOnError: true, // Throw an error if the query fails
  }));

  return (
    <ETDSMainWrapper>
      <div>
        <ETDSToggleButton onClick={() => {}} />
      </div>
    </ETDSMainWrapper>
  );
}
