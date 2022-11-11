import myStyles from '../styles/Layout.module.css';
import Header from './Header';
import NavBar from './NavBar';
import Meta from './Meta';

export default function Layout({child}){
    return(
        <>
            <Meta />
            <NavBar />
            <div className={myStyles.container}>
                <div className={myStyles.main}>
                    <Header/>
                    {child}
                </div>
             </div>
        </>
        
    );
}