import React, { useState } from 'react';
import {
  useDeleteCustomerMutation,
  useUpdateCustomerMutation,
  useCreateCustomerMutation, // Tilføjet opret-funktionen
} from '../../store/apis/alarmApi';

function CustomerCard({ customer, onCustomerUpdated, onCustomerDeleted, onCustomerCreated }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedCustomer, setEditedCustomer] = useState(customer);
  const [newCustomer, setNewCustomer] = useState({});

  const [deleteCustomer] = useDeleteCustomerMutation();
  const [updateCustomer] = useUpdateCustomerMutation();
  const [createCustomer] = useCreateCustomerMutation(); // Opret-funktionen

  const handleUpdateCustomer = async () => {
    try {
      await updateCustomer({ customerNumber: editedCustomer.customerNumber, ...editedCustomer });
      setIsEditing(false);
      onCustomerUpdated();
    } catch (error) {
      console.error('Fejl ved opdatering af kunde:', error);
    }
  };

  const handleDeleteCustomer = async () => {
    try {
      await deleteCustomer(customer.customerNumber);
      onCustomerDeleted(customer.customerNumber);
    } catch (error) {
      console.error('Fejl ved sletning af kunde:', error);
    }
  };

  const handleCreateCustomer = async () => {
    try {
      const createdCustomer = await createCustomer(newCustomer);
      setNewCustomer({});
      onCustomerCreated(createdCustomer);
    } catch (error) {
      console.error('Fejl ved oprettelse af kunde:', error);
    }
  };

  return (
    <tr>
      <td>{editedCustomer.customerNumber}</td>
      <td>
        {isEditing ? (
          <input
            type="text"
            value={editedCustomer.name}
            onChange={(e) => setEditedCustomer({ ...editedCustomer, name: e.target.value })}
          />
        ) : (
          editedCustomer.name
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="text"
            value={editedCustomer.email}
            onChange={(e) => setEditedCustomer({ ...editedCustomer, email: e.target.value })}
          />
        ) : (
          editedCustomer.email
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="text"
            value={editedCustomer.telephone}
            onChange={(e) => setEditedCustomer({ ...editedCustomer, telephone: e.target.value })}
          />
        ) : (
          editedCustomer.telephone
        )}
      </td>
      <td>{editedCustomer.city}</td>
      <td>{editedCustomer.country}</td>
      <td>
        {isEditing ? (
          <>
            <button onClick={handleUpdateCustomer}>Gem</button>
            <button onClick={() => setIsEditing(false)}>Annuller</button>
          </>
        ) : (
          <>
            <button onClick={() => setIsEditing(true)}>Rediger</button>
            <button onClick={handleDeleteCustomer}>Slet</button>
          </>
        )}
      </td>
    </tr>
  );
}

export default CustomerCard;
