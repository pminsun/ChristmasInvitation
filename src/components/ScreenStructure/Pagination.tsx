/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { PaginationType } from "@/InterfaceGather";
import _ from "lodash";
import {
  BsChevronDoubleLeft,
  BsChevronDoubleRight,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";

export default function Pagination({
  postsPerPage,
  totalPosts,
  currentPage,
  setCurrentPage,
}: PaginationType) {
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const displayPages = [];
  const maxPageNumbers = 5;
  const sidePageNumbers = Math.floor(maxPageNumbers / 2);

  let startPageNumber = currentPage - sidePageNumbers;
  let endPageNumber = currentPage + sidePageNumbers;

  if (startPageNumber <= 0) {
    startPageNumber = 1;
    endPageNumber = Math.min(totalPages, maxPageNumbers);
  }
  if (endPageNumber > totalPages) {
    startPageNumber -= endPageNumber - totalPages;
    endPageNumber = totalPages;
  }

  for (let i = startPageNumber; i <= endPageNumber; i++) {
    displayPages.push(i);
  }

  const showNum = _.filter(displayPages, (n) => {
    return n > 0;
  });

  return (
    <div css={paginationStyle}>
      <ul>
        {currentPage > 10 && (
          <li className="arrow aLeftDouble">
            <BsChevronDoubleLeft
              onClick={() => setCurrentPage(currentPage - 10)}
            />
          </li>
        )}
        {currentPage > 1 && (
          <li className="arrow aLeft">
            <BsChevronLeft onClick={() => setCurrentPage(currentPage - 1)} />
          </li>
        )}
        {startPageNumber > 1 && (
          <li>
            <span onClick={() => setCurrentPage(1)}>1</span>
          </li>
        )}
        {startPageNumber > 2 && (
          <li>
            <span>...</span>
          </li>
        )}
        {showNum.map((number) => (
          <li
            key={number}
            aria-current={currentPage === number ? "page" : null}
            onClick={() => setCurrentPage(number)}
          >
            {number}
          </li>
        ))}
        {endPageNumber < totalPages - 1 && (
          <li>
            <span>...</span>
          </li>
        )}
        {endPageNumber < totalPages && (
          <li>
            <span onClick={() => setCurrentPage(totalPages)}>{totalPages}</span>
          </li>
        )}
        {currentPage < totalPages && (
          <li className="arrow aRight">
            <BsChevronRight onClick={() => setCurrentPage(currentPage + 1)} />
          </li>
        )}
        {currentPage <= totalPages - 10 && (
          <li className="arrow aRightDouble">
            <BsChevronDoubleRight
              onClick={() => setCurrentPage(currentPage + 10)}
            />
          </li>
        )}
      </ul>
    </div>
  );
}

const paginationStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 12px 20px;
  border-top: 1px solid rgba(17, 17, 17, 0.2);

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    text-align: center;
    width: auto;
    position: relative;

    li {
      display: inline-block;
      font-size: 16px;
      padding: 4px;
      border-bottom: 2px solid transparent;
      cursor: pointer;
    }
    [aria-current] {
      color: #cf3f22;
      font-weight: 700;
      border-bottom: 2px solid #cf3f22;
    }

    .arrow {
      position: absolute;
      top: 56%;
      transform: translateY(-50%);
    }

    .aLeft {
      left: -25px;
    }

    .aLeftDouble {
      left: -45px;
    }

    .aRight {
      right: -25px;
    }

    .aRightDouble {
      right: -45px;
    }
  }
`;
