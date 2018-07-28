import React from 'react';
import { Pagination } from 'react-bootstrap';


const createButtons = (currentPage, totalPages, handlePageChange) => {
    let items = [];
    const startPage = Math.max(
      Math.min(
        currentPage - Math.floor(9 / 2, 10),
        totalPages - 9,
      ),
      1
    );
    const endPage = startPage + 9;
    for (let page = startPage; page <= endPage; ++page) {
      items.push(<Pagination.Item key={page} onClick={() => handlePageChange(page)} active={page === currentPage}>{page}</Pagination.Item>)
    }

    return items;
  }

export const MyPagination = ({
  handlePageChange,
  currentPage,
  totalPages
}) => (
  <Pagination>
    <Pagination.First onClick={() => handlePageChange(1)}/>
    <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)}/>
    { createButtons(currentPage, totalPages, handlePageChange) }
    <Pagination.Next onClick={() => handlePageChange(currentPage + 1)}/>
    <Pagination.Last onClick={() => handlePageChange(totalPages)}/>
  </Pagination>
);