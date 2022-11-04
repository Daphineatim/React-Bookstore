import React from 'react';
import NewBook from './NewBook';
import AddBook from './AddBook';

function Books() {
  return (
    <>
      <NewBook
        title="Hunger Games"
        author="Suzanne Collins"
        status="64%"
        chapter="chapter 17"
      />
      <NewBook
        title="Hunger Games"
        author="Suzanne Collins"
        status="64%"
        chapter="chapter 17"
      />
      <NewBook
        title="Hunger Games"
        author="Suzanne Collins"
        status="64%"
        chapter="chapter 17"
      />
      <AddBook />
    </>
  );
}

export default Books;
