export default function ListExample(){

    const items=["apple","orange","banana"];

    return (<>

        <h1>ListExample</h1>

        <ul>
            {items.map((item,index)=>
             <li key={index}>{item}</li>
            )

            }
        </ul>





    </>);
};