import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;
  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    tbody {
      tr {
        transition: filter 0.2s;
        td {
          padding: 1rem 2rem;
          border: 0;
          color: var(--text-body);
          background-color: var(--shape);

          &:first-child {
            color: var(--text-title);
            border-radius: 0.25rem 0 0 0.25rem;
          }

          &:last-child {
            border-radius: 0 0.25rem 0.25rem 0;
          }

          &.deposit {
            color: var(--green);
          }

          &.withdraw {
            color: var(--red);
          }
        }

        &:hover {
          filter: brightness(0.9);
        }
      }
    }
  }
`;
