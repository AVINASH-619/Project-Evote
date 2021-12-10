import React,{useState} from 'react'
const Createpoll = () => {
    const [eform, setEform] = useState({ name:'Enter the name of election',
        type:'Enter the type of election',
        rdate:'Enter the close date for registration(DD/MM/YYYY)',
        edate:'Enter the election date(DD/MM/YYYY)',
        fdate:'Enter the result date(DD/MM/YYYY)'
    }
    )
    const [data,setdata]=useState([])
    const handleChange=(e)=>
    {
        const name=e.target.name;
        const value=e.target.value;
        setEform({...eform,[name]:value})
    }
    const set=(e)=>
    {
        const name = e.target.name;
        const value = e.target.value;
        setEform({ ...eform, [name]:""})
    }
    const handleSubmit=(e)=>
    {
         e.preventDefault();
         console.log(e);
         if(eform.name&&eform.rdate&&eform.type&&eform.fdate&&eform.edate)
         {
              setdata([...data,eform])
              console.log(eform);
              console.log(data)
             setEform({
                 name: 'Enter the name of election',
                 type: 'Enter the type of election',
                 rdate: 'Enter the close date for registration(DD/MM/YYYY)',
                 edate: 'Enter the election date(DD/MM/YYYY)',
                 fdate: 'Enter the result date(DD/MM/YYYY)'
             }
             )
         }
    }
    return (
        <div>
            <>
              <form>
                    <div className="row">
                        <div className="col-sm-2 col-md-3 col-lg-4"></div>
                        <h1 className="text-center col-sm-8 col-md-6 col-lg-5 m-3">Create A New Poll</h1>
                    </div>
                   <div className="row">
                       <div className="col-sm-2 col-md-3 col-lg-4"></div>
                      <input className="col-sm-8 col-md-6 col-lg-5 m-3 p-3" type="text"name="name" value={eform.name} onChange={handleChange} onClick={set}></input>
                   </div>
                    <div className="row">
                        <div className="col-sm-2 col-md-3 col-lg-4"></div>
                        <input className="col-sm-8 col-md-6 col-lg-5 m-3 p-3" name="type" type="text" value={eform.type} onChange={handleChange} onClick={set}></input>
                    </div>
                    <div className="row">
                        <div className="col-sm-2 col-md-3 col-lg-4"></div>
                        <input className="col-sm-8 col-md-6 col-lg-5 m-3 p-3" name="rdate" type="text" value={eform.rdate} onChange={handleChange} onClick={set}></input>
                    </div>
                    <div className="row">
                        <div className="col-sm-2 col-md-3 col-lg-4"></div>
                        <input className="col-sm-8 col-md-6 col-lg-5 m-3 p-3" name="edate" type="text" value={eform.edate} onChange={handleChange} onClick={set}></input>
                    </div>
                    <div className="row">
                        <div className="col-sm-2 col-md-3 col-lg-4"></div>
                        <input className="col-sm-8 col-md-6 col-lg-5 m-3 mb-1 p-3" name="fdate" type="text" value={eform.fdate} onChange={handleChange} onClick={set}></input>
                    </div>
                    <div className="row">
                        <div className="col-sm-2 col-md-3 col-lg-4"></div>
                        <div className="text-center col-sm-8 col-md-6 col-lg-5 m-1">
                            <button className="submit p-2 btn-success" onClick={handleSubmit}>Submit</button>
                        </div>
                    </div>
              </form>
            </>
        </div>
    )
}

export default Createpoll
