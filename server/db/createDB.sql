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
  insert into :T_USERS (username, passhash) values
    ('A-san', 'd007a8aa01f0d9caf4b90f0956133918'), -- password_A
    ('B-san', '69b165474c10ec3919cc9b59c850827c'), -- password_B
    ('C-san', '1555b4d961217460fbf27bceea222878'), -- password_C
    ('D-san', '30c4f3e694e32a5b49ff156fc2784baf'), -- password_D
    ('E-san', 'e1992ea12b70e177e3003b72e58b39c1'); -- password_E

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