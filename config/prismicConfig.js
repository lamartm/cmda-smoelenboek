import fetch from "node-fetch";
import * as prismic from "@prismicio/client";

const repoName = "test-lamartm"; // Fill in your repository name.
const endpoint = prismic.getEndpoint(repoName);
const accessToken = ""; // If your repository is private, add an access token.

// The `routes` property is your Route Resolver. It defines how you will
// structure URLs in your project. Update the types to match the Custom
// Types in your project, and edit the paths to match the routing in your
// project.
const routes = [
  {
    type: "teacher-card",
    path: "/:uid",
  },
];

export const client = prismic.createClient(endpoint, {
  fetch,
  accessToken,
  routes,
});
