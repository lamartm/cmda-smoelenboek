import fetch from "node-fetch";
import * as prismic from "@prismicio/client";

const repoName = "test-lamartm"; 
const endpoint = prismic.getEndpoint(repoName);
const accessToken = "";

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