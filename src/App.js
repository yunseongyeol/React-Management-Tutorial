import Customers from './components/Customer';
import './App.css';

const customer = {
  'name' : '홍길동',
  'birthday' : '123456',
  'gender' : '남자',
  'job' : '대학생' 
}

function App() {
  return (
    <Customers
      name={customer.name}
      birthday={customer.birthday}
      gender={customer.gender}
      job={customer.job}
    />
  );
}

export default App;
