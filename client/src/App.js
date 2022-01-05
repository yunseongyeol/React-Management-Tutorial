import Customer from './components/Customer';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles} from '@material-ui/core/styles';
import { mergeClasses } from '@material-ui/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

const customers = [{
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '다시마',
  'birthday' : '123456',
  'gender' : '남자',
  'job' : '대학생' 
},
{
'id' : 2,
'image' : 'https://placeimg.com/64/64/2',
'name' : '홍길동',
'birthday' : '123456',
'gender' : '남자',
'job' : '대학생' 
},
{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '너구리',
  'birthday' : '123456',
  'gender' : '남자',
  'job' : '대학생' 
  },
]

function App() {
  return (
    <Paper className={mergeClasses.root}>
      <Table className={mergeClasses.table}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
{
  customers.map(c => {
    return (
      <Customer
        key={c.id}
        id={c.id}
        image={c.image}
        name={c.name}
        birthday={c.name}
        gender={c.gender}
        job={c.job}
      />
    )
  })
}
</TableBody>
</Table>
</Paper>
  );
}

export default withStyles(styles)(App);
