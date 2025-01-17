# Podcast Index Client

[![Test](https://github.com/podcastool/podcastdx-client/workflows/Test/badge.svg?branch=master)](https://github.com/podcastool/podcastdx-client/actions/workflows/test.yaml) 
[![npm version](https://badge.fury.io/js/podcast-index-client.svg)](https://badge.fury.io/js/podcast-index-client)
[![codecov](https://codecov.io/gh/podcastool/podcastdx-client/branch/master/graph/badge.svg?token=BW5JV2GQS1)](https://codecov.io/gh/podcastool/podcastdx-client)

The is a client for interacting with <https://podcastindex.org/>. In order for this to be useful, you need to get a developer `API KEY` and `API SECRET` from <https://api.podcastindex.org>

This includes typescript types as well as JSDoc strings that should make interacting with the API easier.

JSON Schema generated from the types contained in the project can be found at <https://github.com/podcastool/podcastdx-client/tree/master/src/schemas>

## Installation

```sh
npm -i podcast-index-client
```

## Usage

Auto-generated docs are available at <https://podcastool.github.io/podcastdx-client/index.html>

```ts
import PodcastIndexClient from "podcast-index-client";

// assumes you have an your key and secret set as environment variables
const client = new PodcastIndexClient({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET,
});

client.search("javascript").then(console.log);

client.recentFeeds().then(console.log);
client.recentNewFeeds().then(console.log);
client.recentEpisodes().then(console.log);

client.podcastByUrl("https://feeds.theincomparable.com/batmanuniversity").then(console.log);
client.podcastById(75075).then(console.log);
client.podcastByItunesId(1441923632).then(console.log);

client.episodesByFeedUrl("https://feeds.theincomparable.com/batmanuniversity").then(console.log);
client.episodesByFeedId(75075).then(console.log);
client.episodesByItunesId(1441923632).then(console.log);
client.episodeById(16795106).then(console.log);
```

## Releasing a new version

1. Ensure you're fully committed
   1. Make sure tests are green schema is correct `yarn tsc && yarn test && yarn validate`
2. Run `yarn publish`

## Community

Join on Discord at <https://discord.gg/d6apPvR3N6> or on <https://podcastindex.social/>
