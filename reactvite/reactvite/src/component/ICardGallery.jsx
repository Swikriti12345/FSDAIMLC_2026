import React from 'react'
import ICard from './ICard'
import cat from '../images/cat.png'
function ICardGallery() {

  const students = [{
    pic: cat,
    roll: '80890',
    name: 'Rohan',
    branch: 'CSE-AIML'
  },
  {
    pic: cat,
    roll: '9080',
    name: 'Rohit',
    branch: 'CSE-AIML'
  }]

  return (
    <div style={{ display: 'flex' }}>
      {/*<ICard pic={cat} roll="24343" name="Ram" branch="AIML" /> 
    <ICard />
    <ICard />
    <ICard /> */}
      {
        students.map((ele) => (
          <ICard data={ele} />
        ))
      }
    </div>
  )
}

export default ICardGallery