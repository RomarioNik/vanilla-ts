import { useState, useEffect } from "react";
const url = "https://www.course-api.com/react-tours-project";
import { type Tour, tourSchema } from "./types";

function Component() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<string | null>(null);
  const [tours, setTours] = useState<Tour[]>([]);

  useEffect(() => {
    setIsLoading(true);
    setIsError(null);

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw Error("bad fetch...");

        const rawData: Tour[] = await response.json();
        const result = tourSchema.array().safeParse(rawData);

        if (!result.success) {
          console.log(result.error.message);
          throw new Error(`Failed to parse tours`);
        }

        setTours(result.data);
      } catch (error) {
        const message =
          error instanceof Error ? error.message : "Somthig happend...";

        setIsError(message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <h2>Loading...</h2>;

  if (isError) return <h2>Error : {isError} </h2>;

  return (
    <div>
      <h2 className="mb-1">Tours</h2>
      {tours.map((tour) => {
        return (
          <p key={tour.id} className="mb-1">
            {tour.name}
          </p>
        );
      })}
    </div>
  );
}
export default Component;
