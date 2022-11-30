import "./index.css";



const Footer = (props) => {

    return(
        <div className={"footer-body footer-body-" + props.mode}>
         
         <p>© 2004 NJSTUDIO All Rights Reserved</p>
        
        </div>
    );

}
export default Footer;