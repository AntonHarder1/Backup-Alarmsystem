import { useFetchEpilepsyQuery } from '../../store/apis/alarmApi'; //import afviser "../store"
import AlarmCard from './alarmCard';

function Epilepsy() {
  const { data, error, isLoading } = useFetchEpilepsyQuery();
  let item;
  if (isLoading) {
    item = <div>Loading...</div>;
  } else if (error) {
    item = <div>Error loading epilepsy data.</div>;
  } else {
    item = data.map((alarm) =>{
      return (
        <AlarmCard key={alarm.deviceId} alarm={alarm}></AlarmCard>
      )
    });
  }
  return(
    <div>
      <table  className="table table-striped table-bordered">
        <thead className="bg-light">
          <tr>
            <th>Product</th>
            <th>Code</th>
            <th>Serial Number</th>
            <th>Receive Employee</th>
            <th>Receive Date</th>
            <th>Customer</th>
            <th>Sale Id</th>
            <th>Epilepsy Id</th>
            <th>Is Available</th>
            <th>Is Medical Device</th>
          </tr>
        </thead>
        <tbody>
        {item}
        </tbody>
      </table>
      
    </div>
  )


}


export default Epilepsy;

