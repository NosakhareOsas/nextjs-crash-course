import headerStyles from '../styles/Header.module.css'

export default function Header(){
    return(
        <div>
            <h1 className={headerStyles.title}>
                <span>CRISTIANO</span> RONALDO
            </h1>
            <p className='text-center'>The official website of the greatest footballler of all time</p>
        </div>
    );
}