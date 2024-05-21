import { z } from "zod";

const url = "https://www.course-api.com/react-tours-project";

const tourSchema = z.object({
  id: z.string(),
  image: z.string(),
  info: z.string(),
  name: z.string(),
  price: z.string(),
});

type Tour = z.infer<typeof tourSchema>;

export const fetchData = async (url: string): Promise<Tour[]> => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTp request status: ${response.status}`);
    }

    const rawData: Tour[] = await response.json();
    const result = tourSchema.array().safeParse(rawData);

    if (!result.success) {
      throw new Error(`Invalid data: ${result.error}`);
    }

    return result.data;
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "There was an error...";
    console.log(message);
    return [];
  }
};

const tours = await fetchData(url);
tours.map((item) => {
  console.log(item.name);
});
