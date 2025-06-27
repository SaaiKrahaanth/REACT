import "../../App.css" //just to recall jsx styling
export default function PropsComponent(props){
   // in this eg i tried two type of props at a time 
   //BY USING DESTRUCTURE function
    const {title,description}=props;

    return (<>
           <h1>PropsComponent(from component props) </h1>
           <h2>{props.title} (from props.title) </h2> {/*from props*/}
           <p className="bg-color">{description} (from destructure function)</p>
    </>);
}