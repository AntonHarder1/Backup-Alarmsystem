function AlarmCard({alarm}){
    return (
            <tr >
              <td>{alarm.product}</td>
              <td>{alarm.code}</td>
              <td>{alarm.serialNumber}</td>
              <td>{alarm.receiveEmployee}</td>
              <td>{alarm.receiveDate}</td>
              <td>{alarm.customer}</td>
              <td>{alarm.saleId}</td>
              <td>{alarm.epilepsyId}</td>
              <td>{alarm.isAvailable ? 'Yes' : 'No'}</td>
              <td>{alarm.isMedicalDevice ? 'Yes' : 'No'}</td>
            </tr>
      );
}


      
export default AlarmCard;