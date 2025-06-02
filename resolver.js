import { title } from "node:process";

export const resolvers ={
    Query :{
        job: () => {
            return {
              id: 'test-id',
              title: 'The job',
              description: "The description",
            };
        },
    }
}