import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const typeDefs = gql`
  type Member {
    name: String!
    section: String!
    post: String!
    linkedin: String!
    instagram: String!
    img: String!
    rollNumber: String
    branch: String!
    location: String!
    about: String
  }

  type BlogPost {
    id: ID!
    blog_title: String!
    image: String!
    author: String!
    tags: [String!]!
    description: String!
    mdfile: String!
  }

  type Gallery {
    id: ID!
    imgSrc: String!
    tag: String
  }

  type Query {
    members: [Member]
    blogPosts: [BlogPost]
    gallery: [Gallery]
  }
`;

const resolvers = {
  Query: {
    members: async () => {
      const { profileDetails } = await import(path.resolve(__dirname, './data/member_data.mjs'));
      return profileDetails;
    },
    blogPosts: () => blogPosts, // to be implemented yet
    gallery: () => galleryData, // to be implemented yet
  },
};

const app = express();

app.use(cors());

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
});

await server.start();

server.applyMiddleware({ app, path: '/graphql' });

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
});
