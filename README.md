# exp-react-fetch
typescript -> react -> redux -> axios -> express -> postgreSQL

## Usage
### 0. require
- Install nodejs, git, postgreSQL
- Run `\i ./server/db/createDB.sql` in `psql`.
- Create `./server/api/psql.config.ts` as your DB config.
```ts
export const user: string = "postgres";
export const host: string = "localhost";
export const password: string = "postgres";
export const port: number = 5432;
```
### 1. setup project
```
npm install
```
### 2. open port: 3331
```
npm run start
```
### 3. open port: 3332
```
npm run server
```