import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      teamRankings: [],
      userRankings: []
    }

    this.fetchRankings = this.fetchRankings.bind(this);
  }

  componentDidMount(){
    this.fetchRankings();
  }

  fetchRankings(){
    fetch('https://cors-anywhere.herokuapp.com/https://kodeskole-beta.kode24.no/api/highscore').then(res => {
      res.json().then(json => {
        this.setState({
          teamRankings: json.teamScores,
          userRankings: json.userScores
        });
      })
    })
  }

  aventoInTheLead(){
    let rankOne = this.state.teamRankings.filter(x => x.rank === 1);
    if(this.state.teamRankings.length === 0)
      return <h3>Kode24 kodeskole - Henter data...</h3>

    if(rankOne.length === 1 && rankOne[0].name === 'AVENTO'){
      return <h3>Kode24 kodeskole - Vi leder! 🎉🎉🎉</h3>
    }
    else if(rankOne.length > 1 && rankOne.filter(x => x.name === 'AVENTO').length > 0){
      return <h3>Kode24 kodeskole - Uavgjort 😐</h3>
    }

    return <h3>Kode24 kodeskole - Vi leder ikke lengre 😢</h3>
  }

  render(){
    const teamRankings = this.state.teamRankings.slice(0,10);
    return(
    <div className="main">
      {this.aventoInTheLead()}
      <TableContainer style={{width: '40vw'}}className="tablecontainer" component={Paper}>
        <Table className="ranking-table" aria-label="customized table">
          <TableHead>
            <TableRow className="header">
              <TableCell>Rank</TableCell>
              <TableCell>Team</TableCell>
              <TableCell>Score</TableCell>
              <TableCell>Members</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {teamRankings.map((row) => (
              <TableRow className="tablerow" key={row.name}>
                <TableCell>{row.rank}</TableCell>
                <TableCell>{row.name === 'AVENTO' ? <b>{row.name}</b> : row.name}</TableCell>
                <TableCell>{row.points}</TableCell>
                <TableCell>{row.memberCount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>);
  }
}

export default App;