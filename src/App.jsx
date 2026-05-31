
export default function App(){
return <>
<nav className="nav"><h2>Culinary Harvest</h2><input placeholder="Search recipes..."/></nav>
<section className="hero"><div><h1>Nourish Your Kitchen</h1><p>Discover curated recipes and seasonal inspiration.</p></div></section>
<h2 className="title">Chef's Seasonal Picks</h2>
<div className="grid">
{['Pizza','Vegetarian Stir-Fry','Quinoa Salad'].map(x=><div className="card" key={x}><div className="img"></div><h3>{x}</h3><p>35 mins • Easy</p></div>)}
</div>
<footer className="footer">© Culinary Harvest</footer>
</>
}
