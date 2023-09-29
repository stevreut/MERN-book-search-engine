// TODO - incomplete : need "mutations" plus additional queries

const typeDefs = `
  type Book {
    _id: ID
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type User {
    _id: ID
    username: String!
    email: String!
    password: String!  
    savedBooks: [Book]
  }

  type Query {
    books: [Book]
    book: Book
    users: [User]
    user: User
  }
`;

module.exports = typeDefs;
