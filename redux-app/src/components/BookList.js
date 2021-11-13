import React from 'react';
import BookItem from './BookItem';
import BookAdd from './AddBooks';

function BookList() {
  return (
    <>
      <ul>
        <BookItem />
      </ul>
      <BookAdd />
    </>
  );
}

export default BookList;
