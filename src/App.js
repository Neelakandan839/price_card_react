import './App.css';

function App() {
  return (
    <div className="App">
      <Plans />
    </div>
  );
}

function Plans(){
  const details=[{
    plan:"FREE",
    price:"$0",
    features:[" Single User"," 5GB Storage"," Unlimited Public Projects"," Community Access"," Unlimited Private Projects"," Dedicated Phone Support"," Free Subdomain"," Monthly Status Reports"],
  },
  {
    plan:"PLUS",
    price:"$9",
    features:[" 5 Users"," 50GB Storage"," Unlimited Public Projects"," Community Access"," Unlimited Private Projects"," Dedicated Phone Support"," Free Subdomain"," Monthly Status Reports"],
  },
  {
    plan:"PRO",
    price:"$49",
    features:[" Unlimited Users"," 150GB Storage"," Unlimited Public Projects"," Community Access"," Unlimited Private Projects"," Dedicated Phone Support"," Unlimited Free Subdomain"," Monthly Status Reports"],
  }]
  return (
    <><h2>BOOTSTRAP PRICING CARD</h2>
    <div className="container">
      {details.map((data,index) => (<Card key={index} name={data.plan} price={data.price} features={data.features} />))}
    </div></>
  )
}

function Card(props){
  return (
   <div className="card">
     <h5>{props.name}</h5>
     <h1>{props.price}<span>/month</span></h1>
     <hr></hr>
     <ul className="ul1">
     {props.features.map((feature,index)=>(
       <li key={index}>{feature}</li>
     ))}
     </ul>
     <button>BUY</button>
   </div>
  )
}

export default App;
