import { useFetchCustomerQuery } from '../../store/apis/alarmApi'; //import afviser "../store"
import CustomerCard from './customerCard';

function Customer() {
  const { data, error, isLoading } = useFetchCustomerQuery();
  let item;
  if (isLoading) {
    item = <div>Loading...</div>;
  } else if (error) {
    item = <div>Error loading customer data.</div>;
  } else {
    item = data.map((customer) =>{
      return (
        <CustomerCard key={customer.deviceId} customer={customer}></CustomerCard>
      )
    });
  }
  return(
    <div>
      <table  className="table table-striped table-bordered">
        <thead className="bg-light">
          <tr>
            <th>CustomerNumber</th>
            <th>Name</th>
            <th>Email</th>
            <th>Telephone</th>
            <th>City</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
        {item}
        </tbody>
      </table>
      
    </div>
  )


}


export default Customer;






