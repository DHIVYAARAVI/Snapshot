import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './snapshot.css'

export default function Snapshot() {
    const [snaps, setSnap] = useState([]);
    const [search, setSearch] =  useState("");
    
    useEffect(()=>{
        if(search===''){
            axios.get('https://api.unsplash.com/photos/?client_id=TrjkgYb6W8hfV0_nnlzrAKc9o9Fjfa26om7YCrbHylo').then(
            res =>{
                setSnap(res.data);
                }
            )
            .catch(error =>{
                console.log(error)
            })
        }
        else{
           
            axios.get(`https://api.unsplash.com/search/users?query=${search}&client_id=TrjkgYb6W8hfV0_nnlzrAKc9o9Fjfa26om7YCrbHylo`).then(
            res =>{
                setSnap(res.data.results[0].photos);
                }
            )
            .catch(error =>{
                console.log(error)
            })
        }
        
    }, [search])
    
    return (
        <div className="body">
            <div className="header">
                <h1>Snapshot</h1>
                <input placeholder="search" value={search} onChange={e => setSearch(e.target.value)}/>
            </div>
            <div className="images">
                {
                    snaps.map(snap =>{
                        return(
                            <div className="image_card">
                                <img src={snap.urls.thumb} width="300" height="300"/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
