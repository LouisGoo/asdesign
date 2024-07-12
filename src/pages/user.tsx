import { useEffect, useState } from "react";
const User = () => {
    const [infos, setInfos] = useState([]);
    const [page, setPage] = useState(1);
    useEffect(()=>{
      const getInfo = async () => {
        const res= await fetch(`https://api.github.com/search/users?q=fullname:Ruan&page=${page}&per_page=30`).then(
          res=>{
            if(res.status!==200){
              return null;
            }else{
              return res.json();
            }
          }
        )
        console.log(res.items);
        setInfos(res.items);
      }
      getInfo();
    },[page])

    
    return (
      <div>
        <button onClick={()=>setPage(page=>page+1)}>+++</button>
        {infos.length?<>
          {infos.map(item=> <div>{item.login}</div>)}
        </>:null}
      </div>
    )
  }
  
  export default User;