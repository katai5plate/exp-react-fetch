-- DEFINE DATABASE NAMES
  \set DEFAULT_DB 'postgres'
  \set D_NAME 'expReactFetch'
-- DEFINE SEQUENCE NAMES
  \set S_USERID_DEFINE 'useridSeq'
    \set S_USERID_START 1
    \set S_USERID_NEXT 'nextval(''useridSeq'')'
  \set S_POSTID_DEFINE 'postidSeq'
    \set S_POSTID_START 1
    \set S_POSTID_NEXT 'nextval(''postidSeq'')'
-- DEFINE TABLE NAMES
  \set T_USERS 'users'
  \set T_POSTS 'posts'

-- RESET DB
\c :DEFAULT_DB
drop database :D_NAME;
create database :D_NAME;
\c :D_NAME

-- INSERT DATA
begin;
  drop table :T_USERS;
  drop sequence :S_USERID_DEFINE;
  create sequence :S_USERID_DEFINE start :S_USERID_START;
  create table :T_USERS (
    userid int primary key default :S_USERID_NEXT,
    username text not null,
    passhash text not null,
    created timestamp not null default current_timestamp
  );
  insert into :T_USERS (username, passhash) values -- passhash = bcrypt(salt: 0)
    ('A-san', '$2b$10$Hal5yu8yIfLmKaCdUq/eHeW3eqwvFpo3QfpgvxV4uG54MqWpYxitm'), -- password_A
    ('B-san', '$2b$10$288Mfqf1.RID/5uv8qixl.NvisbWiuHuKoraso/KLh/Mtx5ywRjHK'), -- password_B
    ('C-san', '$2b$10$J9bZJSdbpq2Luw2w8avDk.XPUp/3N.xh8aK0LBXrmEmM.Bitn56W.'), -- password_C
    ('D-san', '$2b$10$pOW2f8LfwxhQQP8FUOhrx.Qao1a1W8bqijqWcEuKaO9s5pb4TmdF2'), -- password_D
    ('E-san', '$2b$10$9KsHP5OiRe2w8dHeM54.Fu3orHAfj1y1z97KNTbhF27kFbdiioeFW'); -- password_E

  drop table :T_POSTS;
  drop sequence :S_POSTID_DEFINE;
  create sequence :S_POSTID_DEFINE start :S_POSTID_START;
  create table :T_POSTS (
    postid int primary key default :S_POSTID_NEXT,
    userid int not null,
    contents text not null,
    created timestamp default current_timestamp
  );
  insert into :T_POSTS (userid, contents) values
    (1, 'Hello, World!'),
    (2, 'Hi'),
    (3, 'hello, B'),
    (2, 'r u hungry?'),
    (3, 'yes'),
    (2, 'sorry, I ate your cake'),
    (3, 'hey wat doing'),
    (4, 'Oops [O_o]'),
    (5, 'THE CAKE IS A LIE!!!!!!!!!!!!!!');
commit;

-- RESULT
select * from :T_USERS;
select * from :T_POSTS;