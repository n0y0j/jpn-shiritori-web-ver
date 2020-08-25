import React, { useEffect, useState } from "react";
import Gamelogo from "../pages/game_logo";
import axios from "axios";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import {
  withStyles,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";

function GameRank() {
  const [rank, setRank] = useState([]);
  const [dump, setDunp] = useState(0);

  useEffect(() => {
    async function getData() {
      const rank_data = await axios.get("http://127.0.0.1:8000/api/");
      setRank(rank_data.data);
    }
    getData();
  }, [dump]);

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

  const classes = useStyles();

  return (
    <div>
      <Gamelogo />
      <div>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>name</StyledTableCell>
                <StyledTableCell align="right">count</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rank.map((rank) => (
                <StyledTableRow key={rank["name"]}>
                  <StyledTableCell component="th" scope="row">
                    {rank["name"]}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {rank["score"]}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default GameRank;
