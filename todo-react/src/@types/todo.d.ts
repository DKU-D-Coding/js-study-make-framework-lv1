declare module "todo" {
  export interface Todo {
    id: number;
    title: string;
    completed: boolean;
    createdAt: Date;
  }
}
