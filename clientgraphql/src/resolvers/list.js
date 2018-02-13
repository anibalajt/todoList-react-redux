import gql from "graphql-tag";
const query = gql`
  query GetLIST {
    list @client {
      id
      text
      completed
    }
  }
`;
let nextListId = 0;
export default {
  defaults: {
    list: []
  },
  resolvers: {
    Mutation: {
      addList: (_, { text, completed }, { cache }) => {
        const previous = cache.readQuery({ query });
        const newList = {
          id: nextListId++,
          text,
          completed,
          __typename: "Item"
        };
        const data = {
          list: previous.list.concat([newList])
        };
        cache.writeData({ data });
        return newList;
      },
      editItem: (_, { id, text }, { cache }) => {
        const previous = cache.readQuery({ query });
        let lists = previous.list;
        lists = lists.map(item => (item.id === id ? { ...item, text } : item));
        const data = {
          list: lists
        };
        cache.writeData({ data });
        return id;
      },
      deleteItem: (_, { id }, { cache }) => {
        const previous = cache.readQuery({ query });
        let lists = previous.list;

        lists = lists.filter(item => {
          return item.id === id ? null : item;
        });
        const data = {
          list: lists
        };
        cache.writeData({ data });
        return id;
      },
      toggleAll: (_, { completed }, { cache }) => {
        const previous = cache.readQuery({ query });
        let lists = previous.list;
        lists = lists.map(
          item =>
            item.completed === completed
              ? { ...item, completed: completed }
              : { ...item, completed: completed }
        );
        const data = {
          list: lists
        };
        cache.writeData({ data });
        return true;
      },
      completedItem: (_, { id, completed }, { cache }) => {
        const previous = cache.readQuery({ query });
        let lists = previous.list;
        lists = lists.map(
          item => (item.id === id ? { ...item, completed } : item)
        );
        const data = {
          list: lists
        };
        cache.writeData({ data });
        return id;
      },
      clearCompleted: (_, { completed }, { cache }) => {
        const previous = cache.readQuery({ query });
        let lists = previous.list;
        lists = lists.filter(item => {
          return !item.completed ? item : null;
        });
        const data = {
          list: lists
        };
        cache.writeData({ data });
        return lists;
      }
    }
  }
};
