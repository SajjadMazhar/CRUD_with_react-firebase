import { useEffect, useState } from 'react';
import './App.css';
import {db} from './firebase';
import {addDoc, collection, deleteDoc, doc, getDocs, updateDoc} from 'firebase/firestore'

function App() {
  const [users, setUsers] = useState([]);
  const [newName, setNewName] = useState("")
  const [newAge, setNewAge] = useState(0)
  const usersCollectionRef = collection(db, "users");

  const createUser = async ()=>{
    await addDoc(usersCollectionRef, {name:newName, age:parseInt(newAge)})
  }

  const updateUser = async(id, age)=>{
    const userDoc = doc(db, "users", id)
    const newFields = {age:age+1}
    await updateDoc(userDoc, newFields)
  }

  const deleteUser = async(id)=>{
    const userDoc = doc(db, "users", id)
    await deleteDoc(userDoc)
  }
  useEffect(()=>{

    const getUsers = async ()=>{
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map(doc=>{
        return ({...doc.data(), id:doc.id})
      }))
    }
    getUsers()
  },[])
  return (
    <div className="App">
      <input placeholder='Name...' onChange={(e)=> setNewName(e.target.value)}/>
      <input placeholder='Age...' onChange={(e)=> setNewAge(e.target.value)}/>
      <button onClick={createUser}>CREATE USER</button>
      {users.map(user=>{
        return (<div key={user.id}>
          <h1>Name: {user.name}</h1>
          <h1>Age: {user.age}</h1>
          <button onClick={()=>{updateUser(user.id, user.age)}}>Increase Age</button>
          <button onClick={()=>deleteUser(user.id)}>Delete user</button>
        </div>)
      })}
    </div>
  );
}

export default App;
