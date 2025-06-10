import { title } from "node:process";

export const resolvers ={
    Query :{
        jobs: () => {
            return [
            {
              id: 'test-id-1',
              title: 'The job1',
              description: "The description",
            },
            {
              id: 'test-id-2',
              title: 'The job2',
              description: "The description",
            },
          ];
        },
    }
}