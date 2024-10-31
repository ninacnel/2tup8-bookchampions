import { useEffect, useState } from "react";

const ReadingList = () => {
    const [lists, setLists] = useState([]);
    console.log(lists);
  
    useEffect(() => {
      fetch("https://localhost:7120/api/ReadingList", {
        headers: {
          accept: "application/json",
          "Authorization": `Bearer ${localStorage.getItem("bookchampions-token")}`
        },
      })
        .then((response) => response.json())
        .then((listsData) => {
          const listsMapped = listsData
            .map((list) => ({
              id: list.id,
              listName: list.name,
            }))
            .sort((a, b) => b.id - a.id);
          setLists(listsMapped);
        })
        .catch((error) => console.log(error));
    }, []);

  return (
    <div>ReadingList</div>
  )
}

export default ReadingList