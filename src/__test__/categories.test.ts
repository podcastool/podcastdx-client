import PodcastIndexClient from "../index";

describe("categories api", () => {
  let client: PodcastIndexClient;
  beforeAll(() => {
    client = new PodcastIndexClient();
  });

  it("response has Technology", async () => {
    const categoriesList = await client.categories();
    const tech = categoriesList.feeds.find((f) => f.name === "Technology");
    expect(tech).toEqual({ name: "Technology", id: 102 });
  });
});
