import React from "react";
import styled from "styled-components";
import { useTable, usePagination } from "react-table";
import { useQuery } from "react-query";
import { fetchtrendingmovies } from "../../fetchData";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TrendingMovies.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";

const TableContainer = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }

  .pagination {
    padding: 0.5rem;
  }
`;

const columns = [
  {
    Header: "Movie",
    accessor: "title",
  },
  {
    Header: "Description",
    accessor: "overview",
  },
];

const trimData = (data = []) =>
  data.map(({ title, overview }) => ({
    title,
    overview,
  }));

function TrendMoviesTable() {
  const { isLoading, error, data, isSuccess } = useQuery(
    ["pokemons"],
    () => fetchtrendingmovies(),
    {
      keepPreviousData: true,
      staleTime: Infinity,
    }
  );

  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, page } =
    useTable(
      {
        columns,
        data: isSuccess ? trimData(data.results) : [],
        manualPagination: true,
      },
      usePagination
    );

  if (error) {
    return <p>Error</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "gray",
        }}
      >
        {/* <Navbar expand="lg" variant="dark">
          <Container fluid>
            <Navbar.Brand href="/home">BotFlix App</Navbar.Brand>
          </Container>
        </Navbar> */}
        <h5
          style={{
            textDecoration: "none",
            fontWeight: "bold",
            padding: 10,
            fontStyle: "italic",
            backgroundColor: "gray",
            color: "pink",
            borderRadius: 10,
            marginTop: 8,
          }}
        >
          BotFlix App
        </h5>

        <h4
          style={{
            textDecoration: "none",
            fontWeight: "bold",
            padding: 10,
            fontStyle: "italic",
            backgroundColor: "gray",
            color: "white",
            borderRadius: 10,
            marginTop: 8,
          }}
        >
          Trending Movies
        </h4>

        {/* <Navbar expand="lg" variant="dark">
          <Container fluid>
            <Navbar.Brand href="">Trending Movies</Navbar.Brand>
          </Container>
        </Navbar> */}

        <div>
          <Link
            to="/search"
            style={{
              textDecoration: "none",
              padding: 10,
              fontStyle: "italic",
              backgroundColor: "white",
              color: "black",
              borderRadius: 10,
              marginTop: 8,
              marginRight: 10,
            }}
            type="Button"
          >
            Search <BiSearch />
          </Link>
        </div>
      </div>
      <TableContainer>
        {isSuccess ? (
          <>
            <table {...getTableProps()}>
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th {...column.getHeaderProps()}>
                        {column.render("Header")}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {page.map((row) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        ) : null}
      </TableContainer>

      {/* <div className="card text-center bg-secondary mb-3">
        <div className="card-body">
          <img
            className="card-img-top"
            style={{ width: "14rem" }}
            src={API_IMG + movies.poster_path}
          />
          <div className="card-body">
            <button className="btn btn-dark" type="button">
              View more
            </button>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default TrendMoviesTable;
